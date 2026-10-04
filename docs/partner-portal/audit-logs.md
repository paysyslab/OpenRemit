---
hide_title: true
title: Audit Logs
---

import { DocPage, Hero, SectionHeading, Card, List, Li, DocTable, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Audit" accent="Logs" subtitle="A record of every activity in the Partner Portal: what changed, when, and who did it." />
<SectionHeading>Audit Entries</SectionHeading>
<DocTable
  columns={['Column', 'Description']}
  rows={[
    ['Module / Screen', 'Where the activity happened, e.g. Transaction, File_based_transaction, Audit_log'],
    ['Activity', 'The action performed, e.g. View All Transactions, Balance Inquiry, View Participant Imds'],
    ['Performed By', 'SYSTEM or a specific user'],
    ['Method', 'API method type, e.g. POST'],
    ['Previous Value / New Value', 'Data before and after the activity, in JSON'],
    ['Timestamp / Comment', 'When it happened and any note'],
  ]}
/>
<Card title="Filtering">
<List>
  <Li>Search by ID, Activity or Username, filter by Method, and filter by date.</Li>
</List>
</Card>
<ImgCard src="/img/PP/audit-logs.png" alt="Audit Logs" label="Fig. 1" />
<SectionHeading>Audit Log Details</SectionHeading>
<Card title="Details panel">
<List>
  <Li>Click <strong>Actions</strong> on an entry to see the module reference, activity, timestamp, method, performer, comment and expandable Previous / New Value JSON for a side-by-side comparison.</Li>
  <Li>Used mainly for compliance and troubleshooting: tracing exactly what changed, when, and by whom.</Li>
</List>
</Card>
<ImgCard src="/img/PP/audit-log-details.png" alt="Audit Log Details" label="Fig. 2" />
</DocPage>
