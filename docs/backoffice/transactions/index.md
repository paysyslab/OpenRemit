---
title: Transactions Overview
---

## Objective
The Transactions module is used to search, monitor, and analyze all remittance transactions processed through OpenRemit. Transaction Details provides a complete view of a selected transaction, including all operational attributes, screening results, and timeline of processing steps.

![authentication flow](/img/txn/actionButton.png)

## Key Capabilities
- Search transactions by ID/reference/partner/branch/date/status;
- View transaction lifecycle across multiple processing steps;
- Inspect parties, accounts, amounts, and screening decisions;
- Access e-PRC generation routes (where applicable).

## When to Use
Use Transactions when you need to:
- troubleshoot a customer query or partner query;
- verify whether a transaction has completed successfully;
- validate screening and title match results;
- confirm timeline progress across steps.

## Accessing Transaction Details
1. Open the menu item **Transactions**.
2. Locate the relevant transaction.
3. Click **Actions → View**.

## Sections
### 1) Overview
Shows:
- Transaction ID;
- External/reference number;
- Created date/time;
- Current state/status.

Use this section to confirm you are viewing the correct transaction and to understand its latest processing state.

<img
  src={require('@site/static/img/txn/txn-overview.png').default}
  alt="Transaction Overview"
  className="zoomable"
/>

### 2) Parties
Displays:
- Remitter details (person/entity);
- Beneficiary details (person/entity).

Validate names, IDs, and any required KYC identifiers based on your compliance policy.

<img
  src={require('@site/static/img/txn/txn-parties.png').default}
  alt="Transaction Parties"
  className="zoomable"
/>

### 3) Accounts
Displays:
- Beneficiary IBAN/bank account (where applicable);
- Bank name (where available);
- Title fetch outcome (if configured).

<img
  src={require('@site/static/img/txn/txn-account.png').default}
  alt="Transaction Accounts"
  className="zoomable"
/>

### 4) Amounts
Displays:
- FCY amount and currency;
- Conversion rate;
- PKR equivalent;
- Purpose code and purpose description.

<img
  src={require('@site/static/img/txn/txn-amount.png').default}
  alt="Transaction Amount"
  className="zoomable"
/>

### 5) Screening
Displays:
- Screening status (Passed / Failed / Pending / Manual Review);
- Screening completion timestamp;

<img
  src={require('@site/static/img/txn/txn-screening.png').default}
  alt="Transaction - Screening"
  className="zoomable"
/>

### 6) Timeline
Displays step-by-step progress through transaction lifecycle, for example:
- Initiated;
- Title fetch completed;
- Screening completed;
- Posting attempted;
- Settlement completed.

<img
  src={require('@site/static/img/txn/txn-timeline.png').default}
  alt="Timeline"
  className="zoomable"
/>

