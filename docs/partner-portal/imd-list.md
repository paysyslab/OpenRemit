---
hide_title: true
title: IMD List
---

import { DocPage, Hero, SectionHeading, Card, List, Li, DocTable, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="IMD" accent="List" subtitle="Reference data for Pakistani banks: participant name, BIC code and IMD, used when entering beneficiary bank details." />
<SectionHeading>Columns</SectionHeading>
<DocTable
  columns={['Column', 'Description']}
  rows={[
    ['Participant Name', 'Name of the bank'],
    ['Bic Code', 'SWIFT / BIC code identifying the institution'],
    ['IMD', 'Institution / Member Identification number used for transaction routing'],
  ]}
/>
<Card title="Using the list">
<List>
  <Li>Search by Name, by Code or by IMD.</Li>
  <Li>Each value has a copy icon, so you can quickly copy a BIC code or IMD when entering beneficiary bank details for a transaction.</Li>
</List>
</Card>
<ImgCard src="/img/PP/imd-list.png" alt="IMD List" label="Fig. 1" />
</DocPage>
