---
hide_title: true
title: Cancellation
---

import { DocPage, Hero, SectionHeading, Card, List, Li } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Cancellation" accent="Screen" subtitle="Raise a cancellation request on a transaction by its Reference / PIN, with a reason." />
<SectionHeading>Purpose</SectionHeading>
<Card title="What the screen does">
<List>
  <Li>Search for the transaction by <strong>Reference / PIN Number</strong>.</Li>
  <Li>Enter a <strong>cancellation reason</strong>, for example "as per partner request" or "as per remitter request".</Li>
  <Li>The request takes effect only after it is authorized.</Li>
</List>
</Card>
<Card amber title="Rules">
<List>
  <Li>Eligibility and approval follow the existing cancellation rules: the transaction can be cancelled only while nothing has been posted, and a Partner Portal cancellation is approved by the <strong>Partner Checker</strong> in the <a href="./checker-inbox">Transactions Checker Inbox</a>. See <a href="../features/financial/cancellation">Cancellation</a>.</Li>
</List>
</Card>
:::caution[TBD]
The screen layout and fields are still being finalized.
:::
</DocPage>
