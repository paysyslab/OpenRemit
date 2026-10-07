---
hide_title: true
title: Instant Status Inquiry
---

import { DocPage, Hero, SectionHeading, Card, List, Li, Sub, DocTable } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Instant Status" accent="Inquiry" subtitle="Look up a home remittance by Reference / PIN and view its full processing trail, current status and any exceptions. Read-only." />
<SectionHeading>Search</SectionHeading>
<Card title="Search by Reference / PIN">
<List>
  <Li>Enter the <strong>Reference / PIN Number</strong> and click <strong>Search</strong> or press Enter. Search is disabled while the field is empty.</Li>
  <Li>The match is exact, ignoring letter case and leading or trailing spaces.</Li>
  <Li>If nothing matches, the screen shows <strong>No transaction found</strong> with the value you searched.</Li>
  <Li><strong>Reset</strong> clears the field and the result. A new search replaces the previous result.</Li>
</List>
</Card>
<SectionHeading>Result</SectionHeading>
<Card title="Expandable result row">
<List>
  <Li>The match appears as one row (Txn Reference), collapsed by default. Click the row or its chevron to expand it into five sections.</Li>
</List>
</Card>
<DocTable
  columns={['Section', 'Fields']}
  rows={[
    ['Transaction Details', 'Remitting Partner Name, Mode of Payment, Transaction Received Date, STAN #, Processing Channel, RTGS Number'],
    ['Remitter Details', 'Remitter Name, Remitter ID Number, Remitter Bank, Remitter Account Number'],
    ['Beneficiary Details', 'Name of Beneficiary, Beneficiary Bank Name, Beneficiary Account Number, Remittance Amount'],
    ['Amendment Details', 'New Bene Name, New Bene Bank Name, New Bene A/C No, Re-Direct Via, Amendment Status (also a chip in the header), Initiator, Requested At, Approver ID'],
    ['Status & Exceptions', 'Transaction Status, Rejection Reason, Pending Status'],
  ]}
/>
<SectionHeading>Display Rules</SectionHeading>
<Card title="How values are shown">
<List>
  <Li><strong>RTGS Number</strong> shows N/A when the transaction did not go over RTGS.</Li>
  <Li><strong>Remitter Bank</strong> and <strong>Remitter Account Number</strong> show N/A when the partner did not send them, for example when the remitter paid cash.</Li>
  <Li>With no amendment, Amendment Details reads <em>No amendment requested on this transaction</em>, with no status chip.</Li>
  <Li><strong>Initiator</strong> shows the maker's user ID. <strong>Approver ID</strong> shows the checker's user ID once authorized, and "—" until then. Empty Rejection Reason or Pending Status shows "—".</Li>
  <Li>A transaction that was rejected earlier and then paid through an amendment shows <strong>Paid</strong>.</Li>
  <Li>Processing Channel and Re-Direct Via are shown as chips (IBFT / FT / RTGS). Amounts are shown in local currency with thousands separators and two decimals.</Li>
  <Li>Status chips:<Sub items={['In-Process: info', 'Pending: warning', 'Paid / Successfully Credited: success', 'Rejected / Failed: error', 'Cancelled: neutral']} /></Li>
</List>
</Card>
<Card amber title="Visibility and audit">
<List>
  <Li>You see only your own partner's transactions. A Reference / PIN belonging to another partner returns <strong>No transaction found</strong>.</Li>
  <Li>Every inquiry is audit logged.</Li>
</List>
</Card>
</DocPage>
