---
title: Maker / Checker Inbox
---

## Objective
The Maker/Checker inbox enforces dual control for user administration and helps maintain onboarding accuracy and auditability.

## Maker Inbox
Makers can:
- view pending requests;
- edit/correct rejected requests;
- resubmit for approval;
- reject drafts (where applicable).


![authentication flow](/img/branchRecords/userMakerInbox.png)

## Checker Inbox
Checkers can:
- approve requests to activate users;
- reject requests with reason;
- send back for correction (if supported).


![authentication flow](/img/branchRecords/checker.png)

## Decision Guidance
Checkers should validate:
- username format;
- email and phone correctness;
- branch code and settlement mapping accuracy;
- adherence to internal access policy.

All decisions are logged for audit.

