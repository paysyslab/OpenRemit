---
hide_title: true
title: Automatic FT Reversal
description: Automatic reversal of a fund transfer when a later step fails, so the partner is never debited for an undelivered payment.
---

import { Hero, Capabilities } from '@site/src/components/DocKit';

<Hero title="Automatic" accent="FT Reversal" subtitle="When a step after posting fails, OpenRemit reverses the fund transfer automatically, so a partner is never debited for a payment that was not delivered." />

<Capabilities tags={['Standard', 'Requires Bank Integration']} />

## Overview

Some flows post a fund transfer before the payment is final. If a later step fails, OpenRemit automatically posts a reversal through the Bank Integration Layer, returning the funds to the Partner Settlement Account (GL). Reversals that cannot be delivered immediately are queued through store-and-forward. A reversal that fails is parked for a manual reversal retry only, with no further fallback, so a correction is never applied twice.

## Significance

- **Ledger integrity**: the partner's account is restored whenever a payment is not delivered.
- **Safe rail fallback**: a rejected RAAST payment is reversed before the transaction moves to the next configured rail.
- **Cash payout safety**: if a pull partner does not confirm a cash payout, the posting is reversed and cash is not handed over.
- **Reconciliation**: every reversal is logged against the transaction and shown on its timeline.

## Usage

### When reversal is triggered

| Flow | Trigger | Reversal posting |
|---|---|---|
| [COC / OTC cash payout](./coc-otc-cash-payout.md) (pull partner) | Confirm Transaction to the partner fails, or times out after retries | Debit the branch or sub-agent settlement account, credit the partner (store-and-forward) |
| [IBFT](./ibft-rail-fallback.md) on RAAST (primary or secondary) | The RAAST transaction inquiry returns RJCT (rejected) | RAAST FT reversal, then the next configured rail |

### Who uses it

| Role | Portal and menu | What they do |
|---|---|---|
| (system) | — | Posts reversals automatically |
| Back Office Maker | Back Office → **Failed Transactions** | Retries a reversal that failed |

### APIs involved

| Interface | API | Used for |
|---|---|---|
| Bank Integration Layer (ESB) | Fund Transfer Reversal | Reverse an internal fund transfer on CBS |
| Bank Integration Layer (ESB) → RAAST | RAAST FT Reversal, Transaction Inquiry | Confirm and reverse a rejected RAAST payment |

## Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor BOM as Back Office Maker
    participant P as Partner
    participant OR as OpenRemit (OR)
    participant OC as OpenConnect (OC)
    participant ESB as Bank Integration Layer (ESB)
    participant CBS
    participant RA as RAAST

    alt Cash payout, pull partner
        OR->>OC: Confirm Transaction
        OC->>P: Confirm Transaction
        P-->>OR: Failure or timeout after retries (via OC)
        OR->>OC: Fund Transfer Reversal (store-and-forward)
        OC->>ESB: Fund Transfer Reversal
        ESB->>CBS: Debit branch or sub-agent, credit partner
        CBS-->>OR: Result (via ESB, OC)
    else IBFT on RAAST
        OR->>OC: RAAST Transaction Inquiry
        OC->>ESB: Transaction Inquiry
        ESB->>RA: Inquiry
        RA-->>OR: RJCT (via ESB, OC)
        OR->>OC: RAAST FT Reversal
        OC->>ESB: FT Reversal
        ESB-->>OR: Result (via OC)
    end

    alt Reversal successful
        OR->>OR: Record reversal on the timeline
        Note over OR: Cash payout marked Failed, or IBFT moves to the next configured rail
    else Reversal failed, or timed out after retries
        OR->>OR: Park in Failed Transactions (reversal retry only, no fallback)
        BOM->>OR: Retry reversal
    end
```

## Outcomes & Edge Cases

| Stage | Condition | Outcome |
|---|---|---|
| Cash payout confirmation (pull) | Failed | Marked failed; FT reversed via store-and-forward |
| Cash payout confirmation (pull) | Timeout | Retried; then FT reversed via store-and-forward and marked failed with "Notify partner timeout" |
| RAAST inquiry | RJCT (rejected) | RAAST FT reversal |
| RAAST reversal | Success | Next configured rail, or the last-rail handling if none |
| RAAST reversal | Failed | Parked in Failed Transactions; only the reversal can be retried (no fallback) |
| RAAST reversal | Timeout | Retried; then parked for a manual reversal retry |

## Related

- [Back Office: Failed Transactions](../../back-office/failed-transactions.md)
- [Back Office: Transactions](../../back-office/transactions.md)
- [COC / OTC Cash Payout](./coc-otc-cash-payout.md)
- [Interbank Transfer (IBFT) with Rail Fallback](./ibft-rail-fallback.md)
- [Reversal File Upload](./reversal-file-upload.md)
