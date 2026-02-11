---
title: Data Type References (OpenRemit)
---

## Data Type References

This section provides a reference for data types, enumerations, and validation rules used across **OpenRemit APIs**, including Authentication, Title Fetch, Bulk Push, Transaction Inquiry, Balance Inquiry, and Participant (IMD) APIs.

It is designed to ensure data consistency, schema validation, and predictable integration behavior.

---

## Overview

- OpenRemit APIs use **JSON** over HTTPS for all requests and responses.
- Secured endpoints require the `X-Auth-Token` header.
- Where validation applies, partner and bank rules may further constrain allowed values.

---

## Standard Data Types

| Type | Description | Example | Allowed Format / Range | Common Fields |
|---|---|---|---|---|
| string | Text or alphanumeric data | `PSL000000001` | Up to 64 characters | `requestId`; `partnerReference`; `bankCode` |
| integer | Whole number (no decimals) | `1` | 0–999999999 | `totalTransactions`; `acceptedCount`; `rejectedCount` |
| long | Large numeric identifier | `23132313131313` | 13–20 digits | `rrn` (if used) |
| boolean | True/false flag | `true` | Boolean literal | `isActive` (if used) |
| date | ISO date (no time) | `2025-04-15` | YYYY-MM-DD | `sentAt` |
| dateTime | ISO date-time | `2025-04-15T10:45:30Z` | ISO 8601 | `createdAt` (if used) |
| decimal | Numeric with decimals | `2500.75` | 0–99999999.99 | `amount`; `settlementAmount`; `commissionAmount` |
| enum | Predefined value set | `ACCOUNT` | See enumerations below | `payoutMethod`; `status` |
| object | Nested JSON object | `bank` | Valid JSON object | `bank`; `beneficiary`; `transactionDetails` |
| array | List of objects | `transactions` | JSON array | `transactions` |


---

## Enumerations

### Payout Method

| Value | Description |
|---|---|
| `ACCOUNT` | Bank account payout |
| `CASH` | Cash payout |

### Transaction Status

| Value | Description |
|---|---|
| `PENDING` | Transaction received but not processed |
| `PROCESSING` | Transaction under processing |
| `COMPLETE` | Transaction completed successfully |
| `FAILED` | Transaction failed |
| `RETURNED` | Transaction reversed or returned |

### Identification Type

| Value | Description |
|---|---|
| `CNIC` | Pakistan National ID |
| `Passport` | Passport number |
| `NTN` | Business tax number |

---

## Naming Conventions

| Convention | Usage | Example |
|---|---|---|
| camelCase | API request/response parameters | `requestId`; `partnerReference`; `payoutMethod` |
| PascalCase | Internal models / UI labels | `ResponseCode`; `BankDetails` |
| snake_case | Logs and internal configs | `transaction_status`; `partner_reference` |

---

## Validation Rules

| Validation Type | Description | Applies To |
|---|---|---|
| Mandatory Fields | Must be provided in every request | `requestId`; `partnerReference` (as applicable) |
| Length Validation | Must not exceed the defined limit | IDs; references; codes |
| Pattern Validation | Format-based validation | CNIC typically 13 digits (where used) |
| Enum Validation | Only predefined values allowed | `payoutMethod`; `status` |
| Data Type Check | Reject if type mismatch | All fields |

---

## Example Schema

```json
{
  "requestId": "TFX20251209000001120",
  "partnerReference": "PSL000000001",
  "payoutMethod": "ACCOUNT",
  "amount": "10000.00",
  "currency": "PKR",
  "status": "PROCESSING",
  "sentAt": "2025-04-15"
}
```

---

## Validation Output Example

| Field | Validation Type | Result | Message |
|---|---|---|---|
| `requestId` | Length Check | Pass | Valid |
| `payoutMethod` | Enum Validation | Pass | Valid value |
| `amount` | Decimal Precision | Pass | Valid numeric format |
| `status` | Enum Validation | Fail | Value not supported |

---

