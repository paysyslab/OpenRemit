---
hide_title: true
title: B2C / C2B Limits & Keyword Block
description: SBP monthly limits per beneficiary and commercial-entity keyword blocking for B2C and C2B home remittances.
---

import { Hero, Capabilities } from '@site/src/components/DocKit';

<Hero title="B2C / C2B Limits &" accent="Keyword Block" subtitle="Enforce SBP monthly limits per beneficiary and block commercial entities on B2C and C2B home remittances, before any credit is posted." />

<Capabilities tags={['Configurable']} />

## Overview

For **B2C and C2B** home remittances (SBP purpose codes 9186, 9249, 9477, 9478 and 9479), OpenRemit applies three checks at validation, strictly before any credit posting:

1. **Partner eligibility**: is this partner allowed this remittance type?
2. **Commercial keyword screening**: does the remitter or beneficiary title match the commercial stop-list?
3. **Monthly limit**: would the beneficiary's cumulative inward total for the calendar month exceed the limit?

Any breach is rejected outright with a machine-readable error code. P2P home remittances and outward remittances are out of scope.

## Significance

- **SBP compliance**: enforces SBP's monthly caps for B2C / C2B home remittance purpose codes.
- **Bank-wide view**: the limit is tracked per beneficiary across **all partners combined**, so it cannot be bypassed by splitting across MTOs.
- **Stops misuse**: commercial entities cannot receive funds under personal remittance channels.
- **Clear feedback**: rejections carry an error code and the remaining headroom.

## Usage

### Who uses it

| Role | Portal and menu | What they do |
|---|---|---|
| Back Office admin | Back Office → **Partners** | Sets B2C / C2B / B2B Allowed flags per partner |
| Back Office admin | Back Office → Commercial keyword stop-list | Maintains the stop-list |
| Back Office admin | Back Office → Monthly limit configuration | Sets limits per purpose code |
| Partner | Partner APIs | Receives the rejection code and headroom |

### Checks

| Check | Rule |
|---|---|
| Partner eligibility | A transaction of a type flagged *N* for the partner is rejected before any other validation |
| Commercial keyword | The remitter or beneficiary title is checked against the stop-list; a match is rejected, independent of the limit |
| Monthly limit | Cumulative USD-equivalent inward total per beneficiary (identified by title) per calendar month, across all partners |

### APIs involved

Rejections are returned on the partner's transaction submission (Post Transactions, or the pull fetch result), with a machine-readable code such as `ERR_MONTHLY_LIMIT_EXCEEDED` plus the remaining headroom.

## Configuration

| Parameter | Description | Default |
|---|---|---|
| B2C Allowed / C2B Allowed / B2B Allowed | Per-partner eligibility flags | default: N |
| Monthly limit: purpose codes 9186, 9249, 9478, 9479 | Per beneficiary per calendar month | default: USD 25,000 |
| Monthly limit: purpose code 9477 (Pension) | Per beneficiary per calendar month | default: PKR 250,000 |
| Commercial keyword stop-list | Words that mark a title as a commercial entity | default: admin-managed list |

Limit changes apply without a deployment and are not retroactive to transactions already processed.

## Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant P as Partner
    participant GW as API Gateway
    participant OR as OpenRemit (OR)

    P->>GW: B2C or C2B transaction
    GW->>OR: Forward
    OR->>OR: Check partner eligibility flag
    alt Type not allowed for partner
        OR-->>P: Rejected (via API Gateway)
        Note over OR: Flow ends
    end
    OR->>OR: Check titles against commercial stop-list
    alt Keyword match
        OR->>OR: Audit log rejection
        OR-->>P: Rejected (via API Gateway)
        Note over OR: Flow ends
    end
    OR->>OR: Add amount to beneficiary monthly total (all partners)
    alt Limit exceeded
        OR->>OR: Audit log rejection
        OR-->>P: ERR_MONTHLY_LIMIT_EXCEEDED with remaining headroom
    else Within limit
        OR->>OR: Continue to screening and posting
    end
```

## Outcomes & Edge Cases

| Stage | Condition | Outcome |
|---|---|---|
| Eligibility | Partner flag is N for the type | Rejected before any other validation |
| Keyword | Title matches the stop-list | Rejected, regardless of limit headroom |
| Limit | Cumulative total would exceed the limit | Rejected with `ERR_MONTHLY_LIMIT_EXCEEDED` and headroom |
| Limit | Within the limit | Continues processing |
| Routing | Any breach | Rejected outright; no manual review or compliance queue |
| Scope | P2P or outward remittance | Not checked |
| Configuration | Limit changed | Applies to new transactions only |
| Audit | Any rejection | Logged with beneficiary title, partner ID, amount, cumulative total, timestamp and reason code |

## Related

- [Back Office: Partners](../../back-office/partners.md)
- [System Restriction](./system-restriction.md)
- [Screening & Compliance Review](./screening-compliance-review.md)
- [Audit Logs & Reports](./audit-logs-reports.md)
