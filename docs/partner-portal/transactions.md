---
hide_title: true
title: Transactions
---

import { DocPage, Hero, SectionHeading, Card, List, Li, DocTable, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Partner" accent="Transactions" subtitle="View every transaction your organisation has sent to OpenRemit, filter the list, and drill into the full processing timeline." />
<SectionHeading>Transaction List</SectionHeading>
<Card title="Columns">
<DocTable
  columns={['Column', 'What it shows']}
  rows={[
    ['Transaction ID / MTO', 'Partner reference and the remitting institution'],
    ['Type', 'Payout type: Cash (OTC), FT or IBFT'],
    ['Amount (local currency)', 'Payout amount in local currency'],
    ['Beneficiary Bank / Account', 'Destination bank and account number'],
    ['Current Stage', 'The processing step the transaction is at, e.g. Title Fetch, Payment, Success'],
    ['Status / Transaction Status', 'Stage outcome and overall state, e.g. SUCCESS, FAILED, FUNDS TRANSFERRED'],
    ['Lifecycle', 'IN PROGRESS or COMPLETED'],
    ['STAN / Agent Code', 'Rail reference and, for cash payouts, the paying agent'],
    ['Created At / Last Update', 'Timestamps'],
  ]}
/>
</Card>
<ImgCard src="/img/PP/transactions.png" alt="Transactions — List and View Details action" label="Fig. 1" />
<SectionHeading>Searching</SectionHeading>
<Card title="Filters">
<List>
  <Li>Filter by Transaction ID, MTO, Type, Amount, Current Stage, Status, Transaction Status, Lifecycle, Agent Code, Created At or Last Update.</Li>
  <Li>Type a value in the relevant field (e.g. the Transaction ID) and the list narrows to matching transactions. Active filters appear as chips that can be cleared individually or with <strong>Clear all</strong>.</Li>
</List>
</Card>
<ImgCard src="/img/PP/transaction-search.png" alt="Transactions — Search Filters" label="Fig. 2" />
<SectionHeading>Transaction Details</SectionHeading>
<Card title="View Details panel">
<List>
  <Li>Open the <strong>Actions</strong> menu on a row and choose <strong>View Details</strong>.</Li>
  <Li>The header shows the type, status, amount, MTO and rail references (RRN, STAN).</Li>
  <Li>Expandable sections: <strong>Overview</strong>, <strong>Parties</strong> (remitter and beneficiary), <strong>Accounts</strong>, <strong>Amounts & FX</strong>, <strong>Screening Summary</strong> and <strong>Timeline</strong>.</Li>
  <Li>The <strong>Timeline</strong> lists each step (Title Fetch, Balance Inquiry, Payment, Confirm Transaction) with its status and time. The steps depend on whether the transaction is FT, IBFT or Cash.</Li>
</List>
</Card>
<ImgCard src="/img/PP/transaction-details.png" alt="Transaction Details — Overview, Parties and Accounts" label="Fig. 3" />
<ImgCard src="/img/PP/transaction-timeline.png" alt="Transaction Details — Timeline" label="Fig. 4" />
<Card amber title="Cash (OTC) transactions">
<List>
  <Li>Cash is handed over to the beneficiary only after the partner confirms the transaction (the final <em>Confirm Transaction</em> step) as successful.</Li>
</List>
</Card>
</DocPage>
