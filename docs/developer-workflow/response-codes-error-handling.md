---
title: Response Codes & Error Handling 
---

## Response Codes & Error Handling

This section is **explicitly aligned with the OpenRemit Push API TSD (v1.0.1)** and documents the HTTP status codes, OpenRemit response codes, and error-handling behavior returned by OpenRemit APIs including Authentication, Title Fetch, Bulk Push, Transaction Inquiry, Balance Inquiry, and IMD List.

---

## Overview

Each OpenRemit API response includes the following core fields:

| Field | Description |
|---|---|
| responseCode | OpenRemit business-level response code |
| responseDescription | Human-readable description of the response |
| timestamp | Time at which response was generated |
| data | Present for successful responses (if applicable) |
| errorDetails | Present for validation or processing errors |

---

## Standard HTTP Status Codes 

| HTTP Code | Status | Meaning | Action Required |
|---|---|---|---|
| 200 | OK | Request processed successfully | Proceed as normal |
| 201 | Created | Resource created | Store reference if applicable |
| 202 | Accepted | Request accepted for processing | Poll inquiry API |
| 400 | Bad Request | Validation or malformed request | Fix request payload |
| 401 | Unauthorized | Invalid credentials or token | Regenerate JWT |
| 429 | Too Many Requests | Rate limit exceeded | Apply backoff |
| 500 | Internal Server Error | OpenRemit internal error | Retry after delay |
| 503 | Service Unavailable | Downstream bank or service unavailable | Retry later |

---

## OpenRemit Response Codes 

| Response Code | Meaning | Applies To |
|---|---|---|
| 00 | Request processed successfully | All APIs |
| 05 | Validation error / Missing mandatory field | All APIs |
| 10 | Duplicate request | Bulk Push |
| 14 | Transaction not found | Transaction Inquiry |
| 20 | Timeout occurred | Any synchronous API |
| 30 | Invalid transaction state | Transaction Inquiry |
| 41 | External service failure | Bank / IMD dependent APIs |
| 96 | System malfunction / Invalid request | Bulk Push |

---

## Error Response Structure

All error responses follow the same structure as defined in the TSD.

```json
{
  "responseCode": "05",
  "responseDescription": "Missing mandatory field",
  "timestamp": "2025-10-30T12:46:00Z",
  "errorDetails": {
    "field": "requestId",
    "message": "requestId cannot be null or empty",
    "suggestion": "Include requestId in request body"
  }
}
```

---

## Retry Logic 

| Error Type | Recommended Action | Retry Interval |
|---|---|---|
| Timeout / 408 / 20 | Retry request | 2–5 seconds |
| 429 Too Many Requests | Exponential backoff | 5–10 seconds |
| 500 / 503 | Retry after delay | 10–15 seconds |
| Validation / 400 / 05 | Do not retry | Not applicable |

---

## Error Handling Guidelines

- Validate mandatory fields before invoking any OpenRemit API.
- Maintain a centralized error handler mapping **HTTP codes** and **OpenRemit response codes**.
- Log the following for each API call:
  - requestId
  - Endpoint
  - HTTP status code
  - responseCode

For asynchronous or batch operations, maintain:
- Retry counters
- Failure logs

---

## Common Failure Scenarios 

| Scenario | Symptom | Resolution |
|---|---|---|
| Expired token | 401 Unauthorized | Re-authenticate and retry |
| Duplicate requestId | Duplicate request error | Generate new requestId |
| Invalid transaction state | State validation error | Follow correct lifecycle |
| Missing mandatory field | Validation error (05) | Fix request payload |
| Bank / IMD unavailable | External service failure (41) | Retry after delay |

---

