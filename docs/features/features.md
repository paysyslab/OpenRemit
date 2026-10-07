---
hide_title: true
title: Features
---

import { Hero, Capabilities } from '@site/src/components/DocKit';

<Hero title="OpenRemit" accent="Features" subtitle="How each OpenRemit feature works end to end: why it exists, who uses it, the message flow across OpenRemit, OpenConnect and the Bank, and what happens when things go wrong." />

## How features are classified

| Category | Rule |
|---|---|
| [**Financial Features**](./financial/financial.md) | The feature creates or alters a ledger posting on CBS or a domestic payment rail, or changes whether, or to whom, funds are paid out. |
| [**Non-Financial Features**](./non-financial/non-financial.md) | Everything else, including integration, controls, notifications and administration. |

## Capability tags

Each feature page starts with one or more tags:

<Capabilities tags={['Standard']} />

Always on.

<Capabilities tags={['Configurable']} />

Can be enabled, disabled or tuned per deployment. The page's **Configuration** section lists the parameters and their defaults.

<Capabilities tags={['Requires Bank Integration']} />

Depends on an API provided by the Bank, for example through its integration layer (ESB).

## Page layout

Each feature page follows the same structure:

1. **Overview**: what the feature is.
2. **Significance**: the business, regulatory or operational reason it exists.
3. **Usage**: who uses it, where in the portals, the steps, and the APIs involved.
4. **Configuration**: tunable parameters and their defaults, where there are any.
5. **Sequence Diagram**: the end-to-end message flow, including failure paths.
6. **Outcomes & Edge Cases**: how the system behaves in each scenario.
7. **Related**: links to the portal user guides.

## Bank-provided API dependencies

Some features depend on APIs the bank must provide. Where a bank cannot provide the required API, the dependent feature cannot be offered in that deployment. These features carry the **Requires Bank Integration** tag.

| Bank-provided API | Dependent features |
|---|---|
| Transaction Inquiry / Account Debit Verification API | [EOD Auto Repush with Debit Verification](./financial/eod-auto-repush.md); [Reconciliation Tally](./non-financial/reconciliation-tally.md) |
| SMS Gateway API | Final Status Alert; Sub-Agent Disbursement SMS; SMS events in Alert Configuration (see [Alerts](./non-financial/alerts.md)) |
| Email Service API | Funding Near Consumption alerts; [Automated RFI](./non-financial/automated-rfi.md) emails; email events in Alert Configuration |
| Customer Information API | Beneficiary contact lookup for the Final Status Alert |

## Systems and roles in the diagrams

| Participant | Role |
|---|---|
| Partner | Remittance partner / MTO that originates the transaction |
| API Gateway | Interface through which all partner API calls reach OpenRemit |
| OpenRemit (OR) | Core remittance system; all remittance data is stored here |
| OpenConnect (OC) | Middleware between OpenRemit, the Bank and the domestic payment switches |
| Bank Integration Layer (ESB) | The Bank's middleware, connecting to CBS, domestic payment rails and the Screening System |
| CBS | The Bank's core banking system |
| Screening System | AML/CFT and sanctions screening |
| Primary / Secondary Rail, RTGS | Interbank rails. The client selects 1LINK or RAAST as the primary rail; the other is an optional secondary rail; RTGS is always third |
| Branch Maker / Branch Checker | Branch or sub-agent users who capture and approve cash payouts |
| Back Office Maker / Back Office Checker | Bank operations users who act on transactions and approve changes |
| Compliance Officer | Reviews transactions held by screening |
