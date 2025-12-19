---
title: Overview
---

## Platform Overview

OpenRemit is a remittance processing platform that enables banks and financial institutions to receive, validate, process, and settle remittance transactions originating from external partners.

OpenRemit acts as a centralized processing layer. It takes inbound partner requests, applies validation and control checks, integrates with compliance and screening processes, applies routing decisions, and forwards transactions to downstream banking systems to complete settlement.

OpenRemit supports a consistent processing approach across partners. This approach reduces integration variance and provides a controlled mechanism for banks to operationalize remittance processing through a single platform layer.

---

## Solution Architecture

OpenRemit operates as an integration and orchestration layer between external remittance partners and internal bank systems.

OpenRemit receives partner-originated transaction requests through secure, API-driven interfaces. It then processes those requests through internal platform modules responsible for validation, compliance checks, routing decisions, and settlement forwarding.

OpenRemit maintains transaction traceability through the full processing lifecycle. It creates identifiers and status progression to enable partners and operational teams to track and inquire on transaction outcomes through the platform.

---

## Vision and Introduction

The vision of OpenRemit is to provide a scalable, configurable, and compliant remittance processing solution that reduces integration complexity for banks while maintaining operational control and regulatory adherence.

OpenRemit supports standardized partner onboarding through a consistent API and processing model. This model allows banks to maintain consistent validation, monitoring, and operational control for transactions even when transaction sources vary by partner.

---

## Key Features

### Partner-Based Remittance Transaction Processing

OpenRemit processes remittance transactions initiated by external partners through a standardized transaction intake mechanism.

The platform receives partner requests and enforces a consistent validation and processing approach. This approach ensures that the bank applies common controls and processing rules across partners rather than implementing partner-specific logic in downstream systems.

OpenRemit supports a processing model that enables banks to manage partner-originated transactions centrally. The platform maintains the transaction state as it moves from partner submission through internal checks and onward processing.

---

### Secure API-Driven Integrations

OpenRemit exposes REST-based interfaces for partner integration.

The platform secures these interfaces using authentication tokens and controlled access headers. This security model supports controlled partner access and reduces direct exposure of internal bank systems to external integration points.

OpenRemit applies request-level checks as part of secure integration. It ensures that only authorized requests enter the processing pipeline and that inbound requests follow expected structure and constraints before processing continues.

---

### Beneficiary Validation and Title Fetch

OpenRemit supports beneficiary validation through account or IBAN verification and title fetch.

The platform performs these validations before processing remittance settlement instructions. This validation reduces failed credits and operational disputes by ensuring that beneficiary details align with the intended receiving account.

OpenRemit uses title fetch as a verification step that improves transaction accuracy. It enables confirmation of beneficiary identity attributes through the banking validation mechanism prior to settlement.

---

### Compliance and Screening Integration

OpenRemit integrates with compliance and screening systems to evaluate transactions against regulatory and policy requirements.

The platform supports screening workflows and identifies transactions that require review. It flags transactions based on screening outcomes and enables controlled handling of those transactions through operational monitoring.

OpenRemit uses compliance and screening integration to support AML and sanction screening alignment. It ensures that the platform evaluates transactions through risk control steps as part of the processing lifecycle.

---

### Multi-Rail Transaction Routing

OpenRemit supports routing transactions across multiple payment rails based on transaction type, beneficiary details, and configured routing rules.

The platform applies routing decisions during transaction processing. These routing decisions determine the appropriate settlement path for a given transaction based on configuration and eligibility.

OpenRemit uses routing logic to support operational scalability. It enables banks to define routing behavior centrally and apply it consistently during transaction processing.

---

### End-to-End Transaction Traceability

OpenRemit maintains end-to-end traceability across the transaction lifecycle.

The platform assigns reference identifiers and updates transaction status as processing progresses through validation, compliance, routing, and settlement steps.

OpenRemit provides traceability to support transaction inquiry and operational monitoring. It enables clear tracking of what stage the transaction reached and what outcome was produced by the processing workflow.

---

## Core Modules

### Partner Integration Layer

The Partner Integration Layer manages inbound communication with external remittance partners.

This module handles authentication, request validation, schema compliance checks, and transaction intake. It ensures that only authorized requests enter the processing flow.

The Partner Integration Layer supports standardized partner interaction. It provides consistent request handling and enables a uniform entry point into the platform processing pipeline.

---

### Transaction Processing Engine

The Transaction Processing Engine orchestrates the end-to-end handling of remittance transactions.

This module applies validation rules, identifies transaction type, and manages transaction state transitions.

The Transaction Processing Engine coordinates the sequence of processing steps. It ensures that the platform performs required validations and checks before routing and settlement forwarding.

---

### Compliance and Screening Interface

The Compliance and Screening Interface acts as the integration point between OpenRemit and compliance or screening systems.

This module forwards transaction data for screening evaluation and receives screening outcomes.

The Compliance and Screening Interface updates transaction state based on screening results. It supports controlled handling for transactions that pass screening and flags transactions requiring review.

---

### Routing and Settlement Layer

The Routing and Settlement Layer determines the appropriate payment rail and settlement mechanism for each transaction.

This module applies routing rules and forwards settlement instructions to downstream systems.

The Routing and Settlement Layer tracks responses and acknowledgments from downstream settlement processes. It supports completion of transaction lifecycle processing based on settlement outcomes.

---

### Backoffice and Operational Monitoring

The Backoffice and Operational Monitoring module provides operational visibility into transaction processing.

This module supports transaction inquiry, exception handling, and review-driven operational handling. It enables operational users to track transaction progress through statuses and identify transactions requiring attention.

The Backoffice and Operational Monitoring module also supports auditability by ensuring that transaction states and operational actions remain visible and traceable for internal accountability and regulatory oversight.
