---
title: Developer Workflow (OpenRemit Push API)
---

## 1) Authentication

**Endpoint:** `BASE_URL/api/v1/authenticate`  
**Headers:** `Content-Type: application/json`

**Request body (sample):**
```json
{
"username": sit_user,
"password": sit_user,
"channel": web,
}
```

**Response body (sample) – Success:**
```json
{
"responseCode": "00",
"responseDescription": "Processed OK",
"expiry": "1742798473",
"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmwiLCJpYXQiOjE3NDI3OTc4NzMsImV4cCI6MTc0Mjc5ODQ3MywiYXVkIjoiQ2FsbENlbnRlciJ9.017ixz4pUYCyISYYRl_iweWfQOe7YrjVPyo_hDY7KYf4JE06tht2pNEipMgY8aCU-UGK3xX037c6-zfDFrro0Q"
}
```

**Response body (sample) – Rejection:**
```json
{
"responseCode": "401",
"responseDescription": "Unauthorized – Wrong Credentials"
}
```

**Header for all secured requests:**
```text
X-Auth-Token: TOKEN
```

---

## 2) Account Inquiry / Title Fetch

**Method Name:** titleFetch  
**URL:** `/api/v1/paysyslabs/titlefetch`

**Header:**
```text
X-Auth-Token: TOKEN
```

**Request body (sample):**
```json
{
"requestId": "TFX20251209000001120",
"partnerReference": "PSL000000001",
"payoutMethod": "ACCOUNT",
"senderCountry": "SA"
"bank": {
"bankCode": "110001",
"bankBranchCode": null,
"bankName": null,
"bankBranchName": null
},
"beneficiary": {
"idType": "CNIC",
"idNumber": "4210112345671",
"idIssuingCountry": "PK",
"mobileNo": "+923001234567",
"accountNumber": "00001234567890"
},
"transactionDetails": {
"amount": "10000.00",
"currency": "PKR",
"purposeOfPayment": "FAMILY_SUPPORT"
}
}
```

**Response body (sample) – Success:**
```json
{
"responseCode": "00",
" responseDescription": "Title fetch successful",
"requestId": "TFX20251209000001120",
"partnerReference ": "PSL000000001",
"beneficiaryName": "MUHAMMAD AHMED",
"bank": {
"bankCode": "110001",
"bankBranchCode": “0010”,
"bankName": null,
"bankBranchName": null
}
}
```

**Response body (sample) – Failure:**
```json
{
"responseCode": "99",
"responseDescription": "Account not found",
"requestId": "TFX20251209000001120",
"partnerReference": " PSL000000001"
}
```

---

## 3) Post Transactions (Bulk Push)

**Method Name:** postTransactions  
**URL:** `BASE_URL//api/v1/paysyslabs/posttransactions`

**Header:**
```text
X-Auth-Token: TOKEN
```

**Request body (sample):**
```json
{
"requestId": "TFX20251209000001120",
"totalTransactions": "2",
"transactions": [
{
"payingCurrency": "PKR",
"payoutMethod": "ACCOUNT",
"transactionDetails": {
"partnerReference": "PSL000000001",
"purposeOfPayment": "FAMILY_SUPPORT",
"originatingCountry": "AE",
"destinationCountry": "PK",
"sentAt": "2024-02-07",
"payingAmount": "10000.00",
"payingCurrency": "PKR",
"settlementRate": "0.00",
"settlementCurrency": "AED",
"settlementAmount": "0.0",
"commissionAmount": "0.0",
"sourceOfFunds": "",
"narration": "FAMILY_SUPPORT"
},
"remitter": {
"fullName": "NOMAN",
"phoneNumber": "",
"address": {
"country": "null",
"city": "DUBAI",
"district": "",
"addressLine1": "DAFZA DUBAI",
"addressLine2": "null",
"postCode": "null",
"state": "null"
},
"nationality": "PAKISTAN",
"countryOfBirth": "PK",
"mobileNumber": "",
"dateOfBirth": "1992-01-01",
"idDetails": {
"expiryDate": "null",
"number": "124588888",
"placeOfIssue": "",
"issueDate": "null"
}
},
"beneficiary": {
"fullName": "JAMES FERNANDES",
"bankDetails": {
"bankAddress1": "MODEL BANK PAKISTAN",
"bankCode": "221166",
"bankAddress2": "null",
"bankName": "MODEL BANK",
"accountNumber": "PK94ABPA0002000001100333"
},
"phoneNumber": "",
"address": {
"country": "null",
"city": "KARACHI",
"district": "",
"addressLine1": "CLIFTON",
"addressLine2": "null",
"postCode": "null",
"state": "null"
},
"nationality": "PAKISTAN",
"mobileNumber": "+921123445666",
"dateOfBirth": "null",
"relationship": "",
"idDetails": {
"expiryDate": "null",
"number": "4200012451245",
"placeOfIssue": "null",
"issueDate": "null"
}
}
},
{
"payingCurrency": "PKR",
"payoutMethod": "CASH",
"transactionDetails": {
"partnerReference": "PSL000000001",
"purposeOfPayment": "FAMILY_SUPPORT",
"originatingCountry": "AE",
"destinationCountry": "PK",
"sentAt": "2024-02-07",
"payingAmount": "10000.00",
"payingCurrency": "PKR",
"settlementRate": "0.00",
"settlementCurrency": "AED",
"settlementAmount": "0.0",
"commissionAmount": "0.0",
"sourceOfFunds": "",
"narration": "FAMILY_SUPPORT"
},
"remitter": {
"fullName": "NOMAN",
"phoneNumber": "",
"address": {
"country": "null",
"city": "DUBAI",
"district": "",
"addressLine1": "DAFZA DUBAI",
"addressLine2": "null",
"postCode": "null",
"state": "null"
},
"nationality": "PAKISTAN",
"countryOfBirth": "PK",
"mobileNumber": "",
"dateOfBirth": "1992-01-01",
"idDetails": {
"expiryDate": "null",
"number": "124588888",
"placeOfIssue": "",
"issueDate": "null"
}
},
"beneficiary": {
"fullName": "JAMES FERNANDES",
"bankDetails": {
"bankAddress1": "MODEL BANK PAKISTAN",
"bankCode": "221166",
"bankAddress2": "null",
"bankName": "MODEL BANK",
"accountNumber": ""
},
"phoneNumber": "",
"address": {
"country": "null",
"city": "KARACHI",
"district": "",
"addressLine1": "CLIFTON",
"addressLine2": "null",
"postCode": "null",
"state": "null"
},
"nationality": "PAKISTAN",
"mobileNumber": "+921123445666",
"dateOfBirth": "null",
"relationship": "",
"idDetails": {
"expiryDate": "null",
"number": "4200012451245",
"placeOfIssue": "null",
"issueDate": "null"
}
}
}
]
}
```

**Response body (sample) – Success:**
```json
{
"responseCode": "00",
"responseDescription": "Batch received successfully",
"requestId": " TFX20251209000001120",
"totalTransactions": 2,
"acceptedCount": 2,
"rejectedCount": 0,
"transactions": [
{
"partnerReference": "PSL000000001",
"status": "ACCEPTED",
"statusCode": "00",
"statusMessage": "Queued for processing",
"duplicate": false
},
{
" partnerReference ": " PSL000000002",
"status": "ACCEPTED",
"statusCode": "00",
"statusMessage": "Queued for processing",
"duplicate": false
}
]
}
```

**Response body (sample) – Failure:**
```json
{
"responseCode": "96",
"responseDescription": "Transaction rejected. Invalid or malformed request.",
"requestId": "TFX20251209000001120",
"totalTransactions": 3,
"acceptedCount": 0,
"rejectedCount": 2
}
```

---

## 4) Transaction Status Inquiry

**Method Name:** transactionInquiry  
**URL:** `/api/v1/paysyslabs/transactionInquiry`

**Header:**
```text
X-Auth-Token: TOKEN
```

**Request body (sample):**
```json
{
"requestId": " TFX20251209000001120",
" partnerReference": "PSL000000001",
}
```

**Response body (sample) – Success:**
```json
{}
```

**Response body (sample) – Failure:**
```json
{
"responseCode": "14",
"responseDescription": "Transaction not found",
"requestId": " TFX20251209000001120",
}
```

---

## 5) Balance Inquiry

**Method Name:** balanceInquiry  
**URL:** `BASE_URL /api/v1/paysyslabs/balanceInquiry`

**Header:**
```text
X-Auth-Token: TOKEN
```

**Request body (sample):**
```json
{
accountNumber : “100300001670201 “
}
```

**Response body (sample) – Success:**
```json
{
"response": {
"response_code": "00",
"response_desc": "SUCCESS",
"balanceInquiry": {
"balanceDetails": {
"branchCode": "1003",
"amount": "3704.68",
"fromAccount": "100300001670201",
"currencyCode": "PKR"
}
}
}
}
```

**Response body (sample) – Failure:**
```json
{
"responseCode": "99",
"responseDescription": "Unable to process",
}
```

---

## 6) IMD List (Participants)

**Method Name:** participantImd  
**URL:** `BASE_URL /api/v1/paysyslabs/get/participant/imd`

**Header:**
```text
X-Auth-Token: TOKEN
```

**Response body (sample) – Success:**
```json
{
"responseCode": "00",
"responseDescription": "Fetched Successfully Participant with Imd",
"data": [
{
"id": 1,
"bicCode": "EGIBPKKA",
"bankName": "Al Baraka Bank Limited",
"localImd": "639530"
},
{
"id": 2,
"bicCode": "ABPAPKKA",
"bankName": "Allied Bank Limited",
"localImd": "589430"
},
{
"id": 3,
"bicCode": "BAHLPKKA",
"bankName": "Bank AL Habib Limited",
"localImd": "627197"
}
]
}
```

**Response body (sample) – Failure:**
```json
{
"responseCode": "99",
"responseDescription": "Unable to process",
}
```
