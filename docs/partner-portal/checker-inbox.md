---
hide_title: true
title: Checker Inbox
---

import { DocPage, Hero, SectionHeading, Card, List, Li, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Transactions" accent="Checker Inbox" subtitle="Second-level review of maker requests: no transaction is cancelled and no bulk file is processed without checker approval." />
<SectionHeading>Pending Requests</SectionHeading>
<Card title="Inbox">
<List>
  <Li>Two tabs: <strong>Transaction Requests</strong> (cancellations) and <strong>Transaction Files</strong> (bulk uploads from <a href="./file-upload">File Upload</a>).</Li>
  <Li>Each request shows Process ID, Transaction ID, Operation (e.g. <em>Partner Transaction Cancel</em>), Created / Modified By, Status, Comments and Request Date.</Li>
</List>
</Card>
<ImgCard src="/img/PP/checker-inbox.png" alt="Transactions Checker Inbox" label="Fig. 1" />
<SectionHeading>Reviewing a Request</SectionHeading>
<Card title="Review dialog">
<List>
  <Li>Open the <strong>Actions</strong> menu on a request. The review dialog shows the transaction details (MTO, payout type, amount), the action type and the maker's comment.</Li>
  <Li>Enter a <strong>Checker's Comment</strong>; it is mandatory.</Li>
  <Li><strong>Accept</strong> approves the request, and a cancelled transaction is marked <strong>CANCELLED</strong>.</Li>
  <Li><strong>Reject</strong> returns the request to the maker's <a href="./failed-transactions">Transactions Maker Inbox</a>.</Li>
</List>
</Card>
<ImgCard src="/img/PP/review-cancellation.png" alt="Review Cancellation dialog" label="Fig. 2" />
</DocPage>
