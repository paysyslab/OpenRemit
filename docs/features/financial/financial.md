---
hide_title: true
title: Financial Features
---

import { Hero } from '@site/src/components/DocKit';

<Hero title="Financial" accent="Features" subtitle="Features that create or alter a ledger posting on CBS, 1LINK, RAAST or RTGS, or change whether, or to whom, funds are paid out." />

| Feature | Summary |
|---|---|
| [COC / OTC Cash Payout](./coc-otc-cash-payout.md) | The beneficiary collects a remittance in cash at a branch or sub-agent |
| [Local Funds Transfer (LFT)](./local-funds-transfer.md) | Credit to a beneficiary account held at the Bank |
| [IBFT / P2P with Rail Fallback](./ibft-rail-fallback.md) | Credit to another bank over 1LINK, with RAAST fallback and manual RTGS |
| [Move to RTGS](./move-to-rtgs.md) | Manual RTGS posting, with manual settlement, reversal and auto-settlement |
| [Retry / Re-push](./retry-repush.md) | Resume failed transactions from the failed stage, singly or in bulk |
| [Automatic FT Reversal](./automatic-ft-reversal.md) | Reverse postings when partner confirmation or a rail fails |
| [Reversal File Upload](./reversal-file-upload.md) | Apply scheme reversals in bulk from a file |
| [Branch OTC Full Reversal](./branch-otc-reversal.md) | Reverse a completed cash payout captured with wrong details |
| [Partner Bulk File Upload](./partner-bulk-file-upload.md) | Partners initiate transactions from a file, with checker approval |
| [Offline Transaction Mechanism](./offline-transaction-mechanism.md) | Keep IBFT running on a shadow balance during a CBS outage |
| [COC Amendment](./coc-amendment.md) | Correct the beneficiary name on an unpaid push cash payout |
| [Cancellation](./cancellation.md) | Cancel from any origin, COC Cancel, and auto-cancellation by TAT |
