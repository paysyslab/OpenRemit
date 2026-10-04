/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  devWorkflowSidebar: [
    {
      type: 'category',
      label: 'Developer Workflow',
      collapsible: false,
      link: { type: 'doc', id: 'developer-workflow/developer-workflow' },
      items: [
        {
          type: 'doc',
          id: 'developer-workflow/developer-workflow',
          label: 'Developer Workflow',
        },
        {
          type: 'doc',
          id: 'developer-workflow/data-type-references',
          label: 'Data Type References',
        },      
        {
          type: 'doc',
          id: 'developer-workflow/response-codes-error-handling',
          label: 'Response Codes & Error Handling',
        },
      ],
    },
  ],
  featuresSidebar: [
    {
      type: 'category',
      label: 'Features',
      collapsible: false,
      link: { type: 'doc', id: 'features/features' },
      items: [
        {
          type: 'category',
          label: 'Financial Features',
          collapsible: true,
          link: { type: 'doc', id: 'features/financial/financial' },
          items: [
            {
              type: 'doc',
              id: 'features/financial/coc-otc-cash-payout',
              label: 'COC / OTC Cash Payout',
            },
            {
              type: 'doc',
              id: 'features/financial/local-funds-transfer',
              label: 'Local Funds Transfer (LFT)',
            },
            {
              type: 'doc',
              id: 'features/financial/ibft-rail-fallback',
              label: 'Interbank Transfer with Rail Fallback',
            },
            {
              type: 'doc',
              id: 'features/financial/move-to-high-value-rail',
              label: 'Move to High-Value Rail',
            },
            {
              type: 'doc',
              id: 'features/financial/retry-repush',
              label: 'Retry / Re-push',
            },
            {
              type: 'doc',
              id: 'features/financial/automatic-ft-reversal',
              label: 'Automatic FT Reversal',
            },
            {
              type: 'doc',
              id: 'features/financial/reversal-file-upload',
              label: 'Reversal File Upload',
            },
            {
              type: 'doc',
              id: 'features/financial/branch-otc-reversal',
              label: 'Branch OTC Full Reversal',
            },
            {
              type: 'doc',
              id: 'features/financial/partner-bulk-file-upload',
              label: 'Partner Bulk File Upload',
            },
            {
              type: 'doc',
              id: 'features/financial/offline-transaction-mechanism',
              label: 'Offline Transaction Mechanism',
            },
            {
              type: 'doc',
              id: 'features/financial/coc-amendment',
              label: 'COC Amendment',
            },
            {
              type: 'doc',
              id: 'features/financial/cancellation',
              label: 'Cancellation',
            },
          ],
        },
        {
          type: 'category',
          label: 'Non-Financial Features',
          collapsible: true,
          link: { type: 'doc', id: 'features/non-financial/non-financial' },
          items: [
            {
              type: 'doc',
              id: 'features/non-financial/partner-integration-modes',
              label: 'Partner Integration Modes',
            },
            {
              type: 'doc',
              id: 'features/non-financial/screening-compliance-review',
              label: 'Screening & Compliance Review',
            },
            {
              type: 'doc',
              id: 'features/non-financial/suspicious-activity-controls',
              label: 'Suspicious Activity Controls',
            },
            {
              type: 'doc',
              id: 'features/non-financial/automated-rfi',
              label: 'Automated RFI',
            },
            {
              type: 'doc',
              id: 'features/non-financial/system-restriction',
              label: 'System Restriction',
            },
            {
              type: 'doc',
              id: 'features/non-financial/b2c-c2b-limits',
              label: 'B2C / C2B Limits & Keyword Block',
            },
            {
              type: 'doc',
              id: 'features/non-financial/account-credit-amendment',
              label: 'Account Credit Amendment',
            },
            {
              type: 'doc',
              id: 'features/non-financial/regulatory-certificate',
              label: 'Regulatory Certificate & Receipts',
            },
            {
              type: 'doc',
              id: 'features/non-financial/alerts',
              label: 'Alerts',
            },
            {
              type: 'doc',
              id: 'features/non-financial/remittance-tracker-api',
              label: 'Remittance Tracker Inquiry API',
            },
            {
              type: 'doc',
              id: 'features/non-financial/iban-fetch',
              label: 'IBAN Fetch & Storage',
            },
            {
              type: 'doc',
              id: 'features/non-financial/balance-imd-dashboards',
              label: 'Partner Balance, Bank Directory & Dashboards',
            },
            {
              type: 'doc',
              id: 'features/non-financial/roles-user-management',
              label: 'Role & User Management',
            },
            {
              type: 'doc',
              id: 'features/non-financial/authentication',
              label: 'Authentication',
            },
            {
              type: 'doc',
              id: 'features/non-financial/audit-logs-reports',
              label: 'Audit Logs & Reports',
            },
          ],
        },
      ],
    },
  ],
  backofficeSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsible: true,
      link: { type: 'doc', id: 'get-started' },
      items: [
        {
          type: 'doc',
          id: 'get-started',
          label: 'Get Started',
        },
        ],
    },
    {  
      type: 'category',
      label: 'Back Office',
      collapsible: true,
      link: { type: 'doc', id: 'back-office/logging-in-and-changing-password' },
      items: [
        {
          type: 'doc',
          id: 'back-office/logging-in-and-changing-password',
          label: 'Logging in and Changing Password',
        },
        {
          type: 'doc',
          id: 'back-office/transactions',
          label: 'Transactions',
        },
        {
          type: 'doc',
          id: 'back-office/failed-transactions',
          label: 'Failed Transactions',
        },
        {
          type: 'doc',
          id: 'back-office/compliance',
          label: 'Compliance',
        },
        {
          type: 'doc',
          id: 'back-office/e-prc',
          label: 'Certificate Generation',
        },
        {
          type: 'doc',
          id: 'back-office/transaction-reversals',
          label: 'Transaction Reversals',
        },
        {
          type: 'doc',
          id: 'back-office/branch-records',
          label: 'Branch Records',
        },
        {
          type: 'doc',
          id: 'back-office/partners',
          label: 'Partners',
        },
        {
          type: 'doc',
          id: 'back-office/subagents',
          label: 'SubAgents',
        },
        
      ],
    },
    {
      type: 'category',
      label: 'Branch Portal',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'branch-portal/logging-in-and-changing-password',
          label: 'Logging in and Changing Password',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-history',
          label: 'Transaction History',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-lookup',
          label: 'Transaction Lookup',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-approval',
          label: 'Transaction Approval',
        },
      ],
    },
    {
      type: 'category',
      label: 'Partner Portal',
      collapsible: true,
      link: { type: 'doc', id: 'partner-portal/logging-in-and-changing-password' },
      items: [
        {
          type: 'doc',
          id: 'partner-portal/logging-in-and-changing-password',
          label: 'Logging in and Changing Password',
        },
        {
          type: 'doc',
          id: 'partner-portal/dashboard',
          label: 'Dashboard',
        },
        {
          type: 'doc',
          id: 'partner-portal/transactions',
          label: 'Transactions',
        },
        {
          type: 'doc',
          id: 'partner-portal/failed-transactions',
          label: 'Failed Transactions',
        },
        {
          type: 'doc',
          id: 'partner-portal/checker-inbox',
          label: 'Checker Inbox',
        },
        {
          type: 'doc',
          id: 'partner-portal/file-upload',
          label: 'File Upload',
        },
        {
          type: 'doc',
          id: 'partner-portal/imd-list',
          label: 'IMD List',
        },
        {
          type: 'doc',
          id: 'partner-portal/partner-balance',
          label: 'Partner Balance',
        },
        {
          type: 'doc',
          id: 'partner-portal/audit-logs',
          label: 'Audit Logs',
        },
      ],
    },
  ],
};
