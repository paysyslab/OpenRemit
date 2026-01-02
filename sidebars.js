/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  overviewSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      link: { type: 'doc', id: 'overview/index' }, // Correct path to the Overview category
      items: [
        {
          type: 'doc',
          id: 'overview/developer-workflow',
          label: 'Developer Workflow',
        },
        {
          type: 'doc',
          id: 'overview/data-type-references',
          label: 'Data Type References',
        },
        {
          type: 'doc',
          id: 'overview/response-codes-error-handling',
          label: 'Response Codes & Error Handling',
        },
      ],
    },
  ],

  backofficeSidebar: [
    {
      type: 'category',
      label: 'Backoffice',
      collapsible: false,
      link: { type: 'doc', id: 'backoffice/index' }, // Correct path to the Backoffice category
      items: [
        {
          type: 'doc',
          id: 'backoffice/dashboard',
          label: 'Dashboard',
        },

        {
          type: 'doc',
          id: 'backoffice/compliance',
          label: 'Compliance Review',
        },

        {
          type: 'category',
          label: 'Transactions',
          items: [
            {
              type: 'doc',
              id: 'backoffice/transactions/index',  
              label: 'Transactions Overview',
            },
            {
              type: 'doc',
              id: 'backoffice/transactions/transaction-list',
              label: 'Transaction List',
            },
          ],
        },

        {
          type: 'category',
          label: 'e-PRC',
          items: [
            {
              type: 'doc',
              id: 'backoffice/eprc/index',
              label: 'e-PRC Overview',
            },
          ],
        },

        {
          type: 'category',
          label: 'Branch Records',
          items: [
            {
              type: 'doc',
              id: 'backoffice/branch-records/index',
              label: 'Branch Records Overview',
            },
            {
              type: 'doc',
              id: 'backoffice/branch-records/user-management',
              label: 'User Management',
            },
            {
              type: 'doc',
              id: 'backoffice/branch-records/bulk-upload',
              label: 'Bulk Uploads',
            },
            {
              type: 'doc',
              id: 'backoffice/branch-records/maker-checker',
              label: 'Maker / Checker Inbox',
            },
          ],
        },

        {
          type: 'category',
          label: 'Partners',
          items: [
            {
              type: 'doc',
              id: 'backoffice/partners/index',
              label: 'Partners Overview',
            },
            {
              type: 'doc',
              id: 'backoffice/partners/partner-management',
              label: 'Partner Management',
            },
            {
              type: 'doc',
              id: 'backoffice/partners/user-management',
              label: 'Partner User Management',
            },
            {
              type: 'doc',
              id: 'backoffice/partners/maker-checker',
              label: 'Partner Maker / Checker',
            },
          ],
        },

        {
          type: 'category',
          label: 'Sub-Agents',
          items: [
            {
              type: 'doc',
              id: 'backoffice/subagents/index',
              label: 'Sub-Agent Overview',
            },
            {
              type: 'doc',
              id: 'backoffice/subagents/subagent-management',
              label: 'Sub-Agent Management',
            },
            {
              type: 'doc',
              id: 'backoffice/subagents/user-management',
              label: 'Sub-Agent User Management',
            },
            {
              type: 'doc',
              id: 'backoffice/subagents/bulk-upload',
              label: 'Bulk User Upload',
            },
            {
              type: 'doc',
              id: 'backoffice/subagents/maker-checker',
              label: 'Sub-Agent Maker / Checker',
            },
          ],
        },
      ],
    },
  ],
};
