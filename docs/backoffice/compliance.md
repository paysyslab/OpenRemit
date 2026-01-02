---
title: Compliance Review
---

## Objective
The Compliance Review module lists transactions that failed automated validation/screening or require manual correction and approval before final posting.

![Compliance](/img/Compliance.png)

## When a Transaction Appears Here
Common triggers include:

- Sender/receiver screening results requiring manual decision;
- Title match failure requiring investigation (where enabled);
- Missing/invalid partner-provided fields requiring correction;
- Exceptions during posting steps that require operations confirmation.

## Page Layout
Typically includes:

- Queue/list of transactions with status **In Compliance Review**;
- Reason codes or failure reason summary;
- Action menu to open details and take a decision.

## Operational Steps
### 1) Locate the Transaction
1. Open **Backoffice → Compliance Review**.
2. Use filters (date range, partner, status) to locate the transaction.

### 2) Review Details
Open the transaction and validate:
- parties (remitter/beneficiary);
- amounts (FCY/PKR; rate);
- screening status and timestamps;
- timeline steps completed so far.

### 3) Apply Corrective Actions (if allowed)
Depending on configuration, you may:
- correct data fields;
- re-trigger specific validations;
- attach internal notes (if supported).

### 4) Approve / Reject
- **Approve**: transaction proceeds to the next step or final posting;
- **Reject**: transaction is marked failed and will not proceed.

## Audit and Notes
Compliance actions should include an internal note explaining:
- why approval was granted or rejected;
- what evidence was checked;
- who approved and when.

