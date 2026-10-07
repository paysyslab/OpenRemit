---
hide_title: true
title: Alerts
description: Beneficiary status alerts by email and SMS, partner low-balance alerts and sub-agent disbursement SMS, all managed from one Alert Configuration module.
---

import { Hero, Capabilities } from '@site/src/components/DocKit';

<Hero title="Notifications &" accent="Alerts" subtitle="Keep beneficiaries and partners informed by email and SMS: status updates, final credit or cancellation, low partner balance and where to collect cash." />

<Capabilities tags={['Configurable', 'Requires Bank Integration']} />

## Overview

OpenRemit sends alerts at key points in a transaction's lifecycle, and one centralised **Alert Configuration** module controls them all. It covers four events: **Personal Messaging**, **Transaction Status**, **Funding Near Consumption** (partner low balance) and **Sub-agent Disbursement**. For each event, authorised users edit the template, recipients, transaction types, trigger stage and channel (Email and SMS, independently). Alerts are event-based across FT, IBFT and cash payout, with flexible recipients and editable templates.

### Bank API dependencies

Alert channels depend on APIs the bank must provide. Where an API is not available, the alerts that depend on it cannot be offered in that deployment.

| Bank-provided API | Alerts that depend on it |
|---|---|
| SMS Gateway API | Final Status Alert; Sub-Agent Disbursement SMS; SMS events in Alert Configuration |
| Email Service API | Funding Near Consumption; Automated RFI emails; email events in Alert Configuration |
| Customer Information API | Beneficiary contact lookup for the Final Status Alert |

## Significance

- **Beneficiary confidence**: beneficiaries know when funds are ready, collected, credited or cancelled.
- **Partner funding**: partners are warned before their balance runs out, avoiding failed transactions.
- **Wider cash reach**: beneficiaries are told they can collect from sub-agent branches as well as the Bank's branches.
- **Privacy**: account numbers and national IDs are masked in every outbound message.
- **Never blocks payment**: alerts are non-blocking and idempotent; financial flows never wait for delivery, and duplicates are suppressed.

## Usage

### Alert events

| Event | Trigger | Channel / recipient |
|---|---|---|
| Transaction status | Cash available for payout; cash collected; credited to account; sent to beneficiary bank (RTGS only); cancelled and refunded; under compliance check | Email to the beneficiary, if the partner provided an email |
| Final Status Alert (account-based) | Final credit to the beneficiary account, or cancellation without credit | SMS to the account holder; contact details fetched through the bank's Customer Information API at send time |
| Funding near consumption | Partner balance falls below the Low Balance Threshold | Email to the partner; the Partner Portal balance display turns from blue to red |
| Sub-Agent Disbursement SMS | A cash payout from a partner with configured sub-agents is available for payout but not yet paid | SMS to the beneficiary (see below) |
| Personal messaging | As configured | As configured |

### Sub-Agent Disbursement SMS

Where a partner has configured sub-agents for disbursement, OpenRemit sends the beneficiary a customized SMS for cash (COC) transactions that are **Available for Payout**, saying the remittance can be collected from any of the bank's branches or from the configured sub-agent's branches.

- The template is configured in Alert Configuration.
- Authorized Back Office users can turn it off. When it is off, no Sub-Agent Disbursement SMS is sent, even if a partner configures a new sub-agent.
- Requires the bank's SMS Gateway API.

### Who uses it

| Role | Portal and menu | What they do |
|---|---|---|
| Back Office admin | Back Office → Alert Configuration | Edits templates, recipients, types, trigger stage and channels; enables or disables alerts |
| Partner | Partner Portal → **Partner Balance** | Sees the low-balance state; receives low-balance emails |

### APIs involved

| Interface | API | Used for |
|---|---|---|
| Bank Customer Information API | Customer contact details | Fetch the account holder's mobile number for the Final Status Alert |
| Bank SMS Gateway API | Send SMS | SMS delivery |
| Bank Email Service API | Send email | Email delivery |

## Configuration

| Parameter | Description | Default |
|---|---|---|
| Templates | Message text per event | default: standard templates |
| Trigger stage | Lifecycle point at which each alert fires | default: as listed above |
| Channels | Email and SMS toggles per event | default: on where the bank's SMS Gateway / Email Service API is available |
| Enable / disable | Turn each alert on or off independently | default: enabled |
| Low Balance Threshold | Partner balance that triggers Funding Near Consumption | default: configurable per partner |
| Sub-agent disbursement SMS | Global switch; when off, no such SMS is sent even if a partner configures a new sub-agent | default: enabled |
| Retries per event | Send retries per alert event | default: configurable per event |

Changes take effect immediately on save and are audit logged.

## Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant P as Partner
    participant OR as OpenRemit (OR)
    participant OC as OpenConnect (OC)
    participant ESB as Bank Integration Layer (ESB)
    participant CBS

    OR->>OR: Lifecycle event (e.g. credited to account)
    OR->>OR: Look up Alert Configuration for the event
    alt Alert disabled
        OR->>OR: Skip
    else Email channel
        OR->>OR: Send masked email to beneficiary (if email provided)
    else SMS channel (account-based final status)
        OR->>OC: Fetch beneficiary contact
        OC->>ESB: Customer contact details
        ESB->>CBS: Lookup
        CBS-->>OR: Mobile number (via ESB, OC)
        OR->>OR: Send masked SMS via Bank SMS Gateway
        OR->>OR: Set delivery flag on transaction
    end

    opt Partner balance below Low Balance Threshold
        OR->>P: Low-balance email (once per breach cycle)
        OR->>OR: Show Partner Portal balance in red
    end
```

## Outcomes & Edge Cases

| Stage | Condition | Outcome |
|---|---|---|
| Delivery | Duplicate trigger for the same event | Suppressed |
| Delivery | Notification fails or is slow | Financial processing is not affected |
| SMS | Delivered | Delivery flag set on the transaction |
| SMS | Contact missing or invalid | Flag not set; the beneficiary appears in the partner-level report so the partner can correct contact data |
| Low balance | Balance falls below the threshold | One alert; no repeat until the balance recovers above the threshold and breaches again |
| Sub-agent SMS | Global switch off | No sub-agent disbursement SMS is sent |
| Content | Any message | Account numbers and national IDs masked |

## Related

- [Partner Portal: Partner Balance](../../partner-portal/partner-balance.md)
- [Partner Balance, Bank Directory & Dashboards](./balance-imd-dashboards.md)
- [Automated RFI](./automated-rfi.md)
- [Regulatory Certificate, Bank Receipt & COC Slip](./regulatory-certificate.md)
- [COC / OTC Cash Payout](../financial/coc-otc-cash-payout.md)
