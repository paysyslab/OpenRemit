---
hide_title: true
title: Partner Balance
---

import { DocPage, Hero, SectionHeading, Card, List, Li, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Partner" accent="Balance" subtitle="Real-time visibility of the funds available to your organisation for processing remittance transactions." />
<SectionHeading>Balance View</SectionHeading>
<Card title="What the screen shows">
<List>
  <Li><strong>Current Available Balance</strong>: the total available amount, with its currency (PKR).</Li>
  <Li><strong>Last Updated</strong>: when the balance was last refreshed.</Li>
  <Li><strong>Refresh Balance</strong>: fetches the latest balance from the system.</Li>
</List>
</Card>
<Card amber title="Why it matters">
<List>
  <Li>Transactions are processed against this balance. Check it to plan operations and make sure enough funds are available before sending transactions.</Li>
</List>
</Card>
<ImgCard src="/img/PP/partner-balance.png" alt="Partner Balance" label="Fig. 1" />
</DocPage>
