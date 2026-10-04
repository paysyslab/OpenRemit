---
hide_title: true
title: Failed Transactions
---

import { DocPage, Hero, SectionHeading, Card, List, Li, Sub, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Failed" accent="Transactions" subtitle="Find out where and why a transaction failed, then request an amendment or a cancellation for checker approval." />
<SectionHeading>Failed Transaction List</SectionHeading>
<Card title="Tabs and columns">
<List>
  <Li>Three tabs with counts: <strong>ALL</strong>, <strong>CANCEL</strong> and <strong>AMEND</strong>.</Li>
  <Li>Each row shows Transaction ID, MTO, Type (e.g. IBFT, with the rail used), Amount (local currency), Current Stage, Status (e.g. FAILED, REVERSED), Transaction Status, Lifecycle and <strong>Reason</strong>, the specific cause of failure.</Li>
</List>
</Card>
<ImgCard src="/img/PP/failed-transactions.png" alt="Failed Transactions — List" label="Fig. 1" />
<SectionHeading>Investigating a Failure</SectionHeading>
<Card title="Transaction Details panel">
<List>
  <Li>Click a transaction to open the details panel: MTO, MTO Reference, and the Overview, Parties, Accounts, Amounts & FX, Screening Summary and Timeline sections.</Li>
  <Li>The <strong>Timeline</strong> shows every processing stage (e.g. Screening Sender-Pre, Screening Receiver-Pre, Title Fetch) with its status and timestamp, and highlights the step where the transaction failed together with the error.</Li>
</List>
</Card>
<ImgCard src="/img/PP/failed-transaction-details.png" alt="Failed Transaction — Details and Timeline" label="Fig. 2" />
<SectionHeading>Amend Transaction</SectionHeading>
<Card title="Correct the beneficiary account">
<List>
  <Li>Click <strong>Amend Transaction</strong>. Two modes are available:<Sub items={[
    'Amend Title: enter the IBAN, click Fetch Account Title to verify the title, then submit a reason.',
    'Amend Account: enter a New Account Number to replace the current one, then submit a reason.',
  ]} /></Li>
  <Li>The request goes for approval before the transaction proceeds. The amendment and its action history are recorded on the transaction timeline.</Li>
</List>
</Card>
<ImgCard src="/img/PP/amend-transaction.png" alt="Amend Transaction — Amend Account" label="Fig. 3" />
<SectionHeading>Cancel Transaction</SectionHeading>
<Card title="Request cancellation">
<List>
  <Li>Click <strong>Cancel Transaction</strong>. A warning explains that the request is sent to the checker and, if approved, the transaction is marked <strong>CANCELLED</strong>.</Li>
  <Li>Enter a <strong>Cancellation Reason</strong> and click <strong>Submit for Approval</strong>.</Li>
</List>
</Card>
<ImgCard src="/img/PP/cancel-transaction.png" alt="Cancel Transaction — Reason and Submit for Approval" label="Fig. 4" />
<Card amber title="Who approves">
<List>
  <Li><strong>Cancellation</strong> is approved by the partner checker in the <a href="./checker-inbox">Transactions Checker Inbox</a>.</Li>
  <Li><strong>Amendment</strong> requires the Back Office (admin) checker.</Li>
</List>
</Card>
<SectionHeading>Transactions Maker Inbox</SectionHeading>
<Card title="Rejected requests">
<List>
  <Li>Requests rejected by the checker appear in the <strong>Transactions Maker Inbox</strong>, under the Transaction Requests and Transaction Files tabs.</Li>
  <Li>The maker can see the status and the checker's comments, then take corrective action if needed.</Li>
</List>
</Card>
<ImgCard src="/img/PP/maker-inbox.png" alt="Transactions Maker Inbox" label="Fig. 5" />
</DocPage>
