---
hide_title: true
title: Specifications
---

import { Hero } from '@site/src/components/DocKit';

<Hero title="Feature" accent="Specifications" subtitle="How each OpenRemit feature works end to end: why it exists, who uses it, the message flow across OpenRemit, OpenConnect and the bank, and what happens when things go wrong." />

## How features are classified

| Category | Rule |
|---|---|
| [**Financial Features**](./financial/financial.md) | The feature creates or alters a ledger posting on CBS, 1LINK, RAAST or RTGS. |
| [**Non-Financial Features**](./non-financial/non-financial.md) | Everything else, including controls that gate a financial flow (screening, approvals, limits) without posting themselves. |

## Feature status

Every feature page carries a status badge:

:::tip[Live]
Available in the current Back Office, Branch Portal or Partner Portal release.
:::

:::note[Specified]
Defined in the functional specification but not yet in the released portals (mostly Phase 2).
:::

## Page layout

Each feature page follows the same structure:

1. **Overview**: what the feature is.
2. **Significance**: the business, regulatory or operational reason it exists.
3. **Usage**: who uses it, where in the portals, the steps, and the APIs involved.
4. **Sequence Diagram**: the end-to-end message flow, including failure paths.
5. **Outcomes & Edge Cases**: how the system behaves in each scenario.
6. **Related**: links to the portal user guides.

## Systems in the diagrams

| Participant | Role |
|---|---|
| Partner | Remittance partner / MTO that originates the transaction |
| API Gateway | Paysys interface through which all partner API calls reach OpenRemit |
| OpenRemit (OR) | Core remittance system; all remittance data is stored here |
| OpenConnect (OC) | Middleware that interfaces with the bank ESB and 1LINK |
| ESB | Bank middleware connecting to CBS, RAAST and SafeWatch |
| CBS | BankIslami core banking system |
| SafeWatch | AML/CFT and fraud screening |
| 1LINK / RAAST / RTGS | Interbank payment rails |
