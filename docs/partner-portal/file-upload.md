---
hide_title: true
title: File Upload
---

import { DocPage, Hero, SectionHeading, Card, List, Li, Sub, Steps, DocTable, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Transaction" accent="File Upload" subtitle="Initiate transactions in bulk by uploading a file instead of sending them one by one. Every file is validated and then approved by a checker." />
<SectionHeading>Uploaded Files</SectionHeading>
<Card title="File list">
<List>
  <Li>Columns: File Name, System File Name, Uploaded By, Uploaded At, Total Rows, Valid Rows, Invalid Rows, Duplicate Rows and Status.</Li>
  <Li>Filter by file name, uploader, date or status.</Li>
</List>
</Card>
<DocTable
  columns={['File status', 'Meaning']}
  rows={[
    ['UPLOADED → VALIDATING → VALIDATED', 'File received and rows checked'],
    ['PENDING_CHECKER', 'Waiting for checker approval'],
    ['CHECKER_REJECTED', 'Checker declined the file'],
    ['PROCESSING', 'Approved transactions are being processed'],
    ['PARTIALLY_PROCESSED / COMPLETED', 'Some or all approved rows processed'],
    ['FAILED', 'File could not be processed'],
  ]}
/>
<ImgCard src="/img/PP/file-upload.png" alt="Transaction File Upload — Uploaded Files" label="Fig. 1" />
<SectionHeading>Uploading a File</SectionHeading>
<Card title="Steps">
<Steps items={[
  <>Click <strong>Download Template File</strong> to get the correct format.</>,
  <>Prepare the file (<code>.xlsx</code>, <code>.xls</code> or <code>.csv</code>) using the template.</>,
  <>Click <strong>Upload File</strong> and select the file. OpenRemit validates every row.</>,
  <>The validated file is sent to the checker. Its transactions proceed only after approval in the <a href="./checker-inbox">Checker Inbox</a> (Transaction Files tab).</>,
]} />
</Card>
<SectionHeading>File Details & Corrections</SectionHeading>
<Card title="Uploaded File Details panel">
<List>
  <Li>Click a file to see its metadata and two tabs: <strong>Valid Transactions</strong> and <strong>Invalid Transactions</strong>.</Li>
  <Li>Each invalid row shows its reference, amount, sender, receiver, payout type, purpose of payment, countries and a <strong>Status Message</strong> explaining the validation error.</Li>
  <Li>Downloads:<Sub items={['Download Txn File: the original upload', 'Download Invalid Txns: only the rows that failed validation', 'Download Feedback File: the failure reason for each row']} /></Li>
</List>
</Card>
<ImgCard src="/img/PP/file-upload-details.png" alt="Uploaded File Details" label="Fig. 2" />
<Card amber title="Partial acceptance">
<List>
  <Li>If the checker partially accepts a file, only the accepted, valid transactions proceed. The rest are marked invalid.</Li>
  <Li>Download the invalid rows or the feedback file, correct the data, and re-upload. The corrected file goes through checker review again.</Li>
</List>
</Card>
</DocPage>
