---
hide_title: true
title: Dashboard
---

import { DocPage, Hero, SectionHeading, Card, List, Li, Sub, ImgCard } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Partner" accent="Dashboard" subtitle="The default landing screen: today's remittance activity in real time, or cumulative performance over a date range." />
<SectionHeading>Real-time View</SectionHeading>
<Card title="Today's activity">
<List>
  <Li><strong>Remittance Statistics</strong>: today's live counts and values for Received, Processed, Pending and Reversed remittances. Click <strong>Refresh</strong> to update.</Li>
  <Li><strong>Payout Breakdown</strong>: processed transactions split by payout type.<Sub items={['Cash (OTC / COC)', 'FT (account credit within the Bank)', 'IBFT (other-bank credit)']} /></Li>
  <Li>Two charts summarise the day: <strong>Transaction Status (Today)</strong> and <strong>Today's Amount Distribution</strong>.</Li>
</List>
</Card>
<ImgCard src="/img/PP/dashboard-realtime.png" alt="Dashboard — Real-time View" label="Fig. 1" />
<SectionHeading>Performance View</SectionHeading>
<Card title="Date-range analysis">
<List>
  <Li>Click <strong>Performance</strong> in the top-right toggle to switch to the date-range view.</Li>
  <Li>Select a <strong>From / To</strong> date-time, or use the <strong>MTD</strong> / <strong>YTD</strong> shortcuts, then click <strong>Refresh</strong>.</Li>
  <Li>The statistics and payout cards show cumulative totals with trend lines.</Li>
  <Li>Two additional charts appear:<Sub items={['Transaction Status (Selected Range): Cancelled, Processed, Failed, Pending and Reversed', 'Monthly Trends: amount and transaction count over time']} /></Li>
  <Li>A status bar at the bottom shows system status and the last refresh time.</Li>
</List>
</Card>
<ImgCard src="/img/PP/dashboard-performance.png" alt="Dashboard — Performance View" label="Fig. 2" />
</DocPage>
