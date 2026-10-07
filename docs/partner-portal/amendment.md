---
hide_title: true
title: Amendment
---

import { DocPage, Hero, SectionHeading, Card, List, Li } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Amendment" accent="Screen" subtitle="Raise an amendment request on a transaction by its Reference / PIN, to correct where the beneficiary is credited." />
<SectionHeading>Purpose</SectionHeading>
<Card title="What the screen does">
<List>
  <Li>Search for the transaction by <strong>Reference / PIN Number</strong>.</Li>
  <Li>Update the <strong>Beneficiary Bank Name</strong> and <strong>Beneficiary Account Number</strong>. The new beneficiary name is fetched through the Title Fetch service.</Li>
  <Li>The request takes effect only after it is authorized.</Li>
</List>
</Card>
<Card amber title="Rules">
<List>
  <Li>Eligibility and approval follow the existing amendment rules: an account credit amendment is approved by the Back Office Checker. See <a href="../features/non-financial/account-credit-amendment">Account Credit Amendment</a>.</Li>
  <Li>A cash (COC) beneficiary-name correction follows the <a href="../features/financial/coc-amendment">COC Amendment</a> rules and is approved by the Partner Checker.</Li>
</List>
</Card>
:::caution[TBD]
The screen layout and fields are still being finalized.
:::
</DocPage>
