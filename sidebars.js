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
          label: 'E-PRC',
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
  ],
};
