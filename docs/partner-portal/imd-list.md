---
hide_title: true
title: IMD List
---

import { DocPage, Hero, SectionHeading, Card, List, Li, DocTable, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="IMD" accent="List" subtitle="Reference data for domestic banks: participant name, BIC code and domestic bank code (IMD in Pakistan), used when entering beneficiary bank details." />
<SectionHeading>Columns</SectionHeading>
<DocTable
  columns={['Column', 'Description']}
  rows={[
    ['Participant Name', 'Name of the bank'],
    ['Bic Code', 'SWIFT / BIC code identifying the institution'],
    ['IMD', 'Domestic bank / member code used for transaction routing (the 1LINK IMD in Pakistan)'],
  ]}
/>
<Card title="Using the list">
<List>
  <Li>Search by name, BIC code or bank code (IMD).</Li>
  <Li>Each value has a copy icon, so you can quickly copy a BIC or bank code when entering beneficiary bank details for a transaction.</Li>
</List>
</Card>
<ImgCard src="/img/PP/imd-list.png" alt="IMD List" label="Fig. 1" />
</DocPage>
