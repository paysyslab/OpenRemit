---
hide_title: true
title: Automatic FT Reversal
description: Automatic reversal of a fund transfer when a later step fails, so the partner is never debited for an undelivered payment.
---

import { Hero, Capabilities } from '@site/src/components/DocKit';

<Hero title="Automatic" accent="FT Reversal" subtitle="When a step after posting fails, OpenRemit reverses the fund transfer automatically, so a partner is never debited for a payment that was not delivered." />

<Capabilities tags={['Standard', 'Requires Bank Integration']} />

## Overview

Some flows post a fund transfer on CBS before the payment is final. If a later step fails, OpenRemit automatically posts a **Fund Transfer Reversal** through the Bank Integration Layer, returning the funds to the Partner Settlement Account (GL). Reversals that cannot be delivered immediately are queued through store-and-forward. A reversal that fails is parked for a manual reversal retry only.

## Significance

- **Ledger integrity**: the partner's account is restored whenever a payment is not delivered.
- **Safe rail fallback**: an IBFT is only moved to the next rail after the previous rail's debit has been reversed, preventing double payment.
- **Cash payout safety**: if a pull partner does not confirm a cash payout, the posting is reversed and cash is not handed over.
- **Reconciliation**: every reversal is logged against the transaction and shown on its timeline.

## Usage

### When reversal is triggered

| Flow | Trigger | Reversal posting |
|---|---|---|
| [COC / OTC cash payout](./coc-otc-cash-payout.md) (pull partner) | Confirm Transaction to the partner fails, or times out after retries | Debit the branch or sub-agent settlement account, credit the partner (store-and-forward) |
| [IBFT](./ibft-rail-fallback.md), primary rail | Payment fails, or the primary-rail inquiry finds it failed or not found | Credit the partner, then fall back to the secondary rail |
| [IBFT](./ibft-rail-fallback.md), secondary rail | Secondary-rail inquiry returns rejected (e.g. RJCT) | Secondary-rail reversal, then park for a manual move to the high-value rail |

### Who uses it

| Role | Portal and menu | What they do |
|---|---|---|
| (system) | — | Posts reversals automatically |
| Back Office Maker | Back Office → **Failed Transactions** | Retries a reversal that failed |

### APIs involved

| Interface | API | Used for |
|---|---|---|
| Bank Integration Layer (ESB) | Fund Transfer Reversal | Reverse an internal fund transfer on CBS |
| Bank Integration Layer (ESB) → secondary rail | Secondary-rail reversal | Reverse a rejected secondary-rail payment |
| OpenConnect → primary rail | Transaction Inquiry | Confirm the primary-rail outcome before reversing |

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
    participant L1 as Primary Rail

    alt Cash payout, pull partner
        OR->>OC: Confirm Transaction
        OC->>P: Confirm Transaction
        P-->>OR: Failure or timeout after retries (via OC)
    else IBFT on primary rail
        OR->>OC: Transaction Inquiry
        OC->>L1: Transaction Inquiry
        L1-->>OR: Failed or not found (via OC)
    end

    OR->>OC: Fund Transfer Reversal (store-and-forward)
    OC->>ESB: Fund Transfer Reversal
    ESB->>CBS: Credit Partner Settlement Account (GL)
    CBS-->>OR: Result (via ESB, OC)
    alt Reversal successful
        OR->>OR: Record reversal on the timeline
        Note over OR: Cash payout marked Failed, or IBFT falls back to secondary rail
    else Reversal failed, or timed out after retries
        OR->>OR: Park in Failed Transactions (reversal retry only)
        BOM->>OR: Retry reversal
    end
```

## Outcomes & Edge Cases

| Stage | Condition | Outcome |
|---|---|---|
| Cash payout confirmation (pull) | Failed | Marked failed; FT reversed via store-and-forward |
| Cash payout confirmation (pull) | Timeout | Retried; then FT reversed via store-and-forward and marked failed with "Notify partner timeout" |
| Primary rail | Payment failed, or inquiry finds failed / not found | Partner debit reversed, then fallback to the secondary rail |
| Primary-rail reversal | Success | Fallback to the secondary rail |
| Primary-rail reversal | Failed | Parked in Failed Transactions; only the reversal can be retried |
| Primary-rail reversal | Timeout | Retried; then parked for a manual reversal retry |
| Secondary-rail inquiry | Rejected (e.g. RJCT) | Secondary-rail reversal |
| Secondary-rail reversal | Success | Parked for a manual move to the high-value rail |
| Secondary-rail reversal | Failed | Parked; only the reversal can be retried (manual settlement) |
| Secondary-rail reversal | Timeout | Retried; then parked for a manual reversal retry |

## Related

- [Back Office: Failed Transactions](../../back-office/failed-transactions.md)
- [Back Office: Transactions](../../back-office/transactions.md)
- [COC / OTC Cash Payout](./coc-otc-cash-payout.md)
- [Interbank Transfer (IBFT) with Rail Fallback](./ibft-rail-fallback.md)
- [Reversal File Upload](./reversal-file-upload.md)
