---
hide_title: true
title: Financial Features
---

import { Hero } from '@site/src/components/DocKit';

<Hero title="Financial" accent="Features" subtitle="Features that create or alter a ledger posting on CBS or a domestic payment rail, or change whether, or to whom, funds are paid out." />

| Feature | Summary |
|---|---|
| [COC / OTC Cash Payout](./coc-otc-cash-payout.md) | The beneficiary collects a remittance in cash at a branch or sub-agent |
| [Local Funds Transfer (LFT)](./local-funds-transfer.md) | Credit to a beneficiary account held at the Bank |
| [Interbank Transfer (IBFT) with Rail Fallback](./ibft-rail-fallback.md) | Credit to another bank over a client-selected primary rail (1LINK or RAAST), an optional secondary rail, and RTGS as the third rail |
| [Move to RTGS](./move-to-rtgs.md) | RTGS as the third rail: manual, bulk or configurable auto-reroute, with manual settlement, reversal and auto-settlement |
| [Retry / Re-push](./retry-repush.md) | Resume failed transactions from the failed stage, singly or in bulk |
| [EOD Auto Repush with Debit Verification](./eod-auto-repush.md) | Daily check of timed-out transactions: mark already-debited ones paid, re-push the rest |
| [Automatic FT Reversal](./automatic-ft-reversal.md) | Reverse postings when partner confirmation or a rail fails |
| [Reversal File Upload](./reversal-file-upload.md) | Back Office bulk reversal of rail-reversed transactions, by file |
| [Partner Bulk File Upload](./partner-bulk-file-upload.md) | Partners initiate transactions from a file, with checker approval |
| [Offline Transaction Mechanism](./offline-transaction-mechanism.md) | Keep interbank credits running on a shadow balance during a CBS outage |
| [COC Amendment](./coc-amendment.md) | Correct the beneficiary name on an unpaid push cash payout |
| [Cancellation](./cancellation.md) | Cancel from any origin, COC Cancel, and auto-cancellation by TAT |
