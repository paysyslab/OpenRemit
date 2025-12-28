// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   mainSidebar: [
//     {
//       type: 'doc',
//       id: 'overview/index',
//       label: 'Overview',
//     },
//     {
//       type: 'doc',
//       id: 'backoffice/index',
//       label: 'Backoffice',
//     },
//   ],
// };

// module.exports = sidebars;
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  overviewSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'overview/index',
      },
      items: [
        'overview/developer-workflow',
        'overview/data-type-references',
        'overview/response-codes-error-handling',
      ],
    },
  ],

  backofficeSidebar: [
    {
      type: 'category',
      label: 'Backoffice',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'backoffice/index',
      },
      items: [
        // add backoffice docs here later
      ],
    },
  ],
};
