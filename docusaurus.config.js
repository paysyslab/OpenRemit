// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenRemit',
  tagline: 'API Documentation for OpenRemit',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Ensure compatibility with the upcoming Docusaurus v4
  },

  url: 'https://paysyslabs.github.io',  // Your GitHub Pages URL
  baseUrl: '/OpenRemit/',  // Base path for deployment

  organizationName: 'paysyslab',  // GitHub organization name
  projectName: 'OpenRemit',  // GitHub repo name
  deploymentBranch: 'gh-pages',  // Branch to deploy to GitHub Pages
  trailingSlash: false,  // Ensures the URL does not end with a slash

  onBrokenLinks: 'throw',  // Throws an error for broken links during build
  onBrokenMarkdownLinks: 'throw',  // Throws an error for broken markdown links

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@scalar/docusaurus',  // Plugin for API documentation
      {
        label: 'API Specifications',
        route: '/api-specifications',
        showNavLink: true,  // Show link to the API specs in the navbar
        configuration: {
          url: './openapi/openremit.yml',  // Path to OpenAPI spec
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',  // Base path for documentation
          sidebarPath: false,  // Sidebar path configuration, set to false if not using sidebar
        },
        blog: false,  // Disables the blog feature
        theme: {
          customCss: './src/css/custom.css',  // Custom CSS for your website
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,  // Respect the user's system color scheme
    },

    tableOfContents: {
      minHeadingLevel: 2,  // Minimum heading level for table of contents
      maxHeadingLevel: 4,  // Maximum heading level for table of contents
    },

    navbar: {
      title: 'OpenRemit',
      logo: {
        alt: 'Paysys Labs',
        src: 'img/paysys-logo.png',  // Logo of your project (Paysys Labs logo)
        target: '_blank',  // Open logo link in a new tab (optional)
      },
      items: [
        { to: '/docs/overview', label: 'Overview', position: 'left' },  // Link to Overview page
        { to: '/docs/backoffice', label: 'Backoffice', position: 'left' },  // Link to Backoffice page
        // { to: '/api-specifications', label: 'API Specifications', position: 'left' },  // Link to API Specifications
      ],
    },

    footer: {
      style: 'dark',
      links: [
        // {
        //   items: [
        //     { label: 'GitHub', href: 'https://github.com/paysyslabs/openremit-api-specs' },  // Link to GitHub repository
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs.`,
    },

    prism: {
      theme: prismThemes.github,  // Light theme for code blocks
      darkTheme: prismThemes.dracula,  // Dark theme for code blocks
    },
  },
};

export default config;


// // @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'OpenRemit',
//   tagline: '',
//   favicon: 'img/favicon.ico',

//   future: {
//     v4: true,
//   },

//   url: 'https://paysyslabs.github.io',
//   baseUrl: '/openremit-api-specs/',

//   organizationName: 'paysyslabs',
//   projectName: 'openremit-api-specs',
//   deploymentBranch: 'gh-pages',
//   trailingSlash: false,

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'throw',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   plugins: [
//     // [
//     //   '@docusaurus/plugin-client-redirects',
//     //   {
//     //     redirects: [
//     //       {
//     //         from: '/',
//     //         to: '/docs/overview',
//     //       },
//     //     ],
//     //   },
//     // ],
//     [
//       '@scalar/docusaurus',
//       {
//         label: 'API Specifications',
//         route: '/api-specifications',
//         showNavLink: false,
//         configuration: {
//           url: '/openremit-api-specs/openapi/openremit.yml',
//         },
//       },
//     ],
//   ],

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           routeBasePath: 'docs',
//           sidebarPath: false,
//         },
//         blog: false, 
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       },
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       colorMode: {
//         respectPrefersColorScheme: true,
//       },

//       tableOfContents: {
//         minHeadingLevel: 2,
//         maxHeadingLevel: 4,
//       },

//       navbar: {
//         title: 'OpenRemit',
//         logo: {
//           alt: 'Paysys Labs',
//           src: 'img/paysys-logo.png',
//         },
//         items: [
//           {to: '/docs/overview', label: 'Overview', position: 'left'},
//           {to: '/docs/backoffice', label: 'Backoffice', position: 'left'},
//           {to: '/api-specifications', label: 'API Specifications', position: 'left'},
//           // {
//           //   href: 'https://github.com/paysyslabs/openremit-api-specs',
//           //   label: 'GitHub',
//           //   position: 'right',
//           // },
//         ],
//       },

//       footer: {
//         style: 'dark',
//         links: [
//           // {
//           //   title: 'Docs',
//           //   items: [
//           //     {label: 'Overview', to: '/docs/overview'},
//           //     {label: 'Backoffice', to: '/docs/backoffice'},
//           //     {label: 'API Specifications', to: '/api-specifications'},
//           //   ],
//           // },
//           {
//             // title: 'More',
//             items: [
//               // {
//               //   label: 'GitHub',
//               //   href: 'https://github.com/paysyslabs/openremit-api-specs',
//               // },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs.`,
//       },

//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;



// // // @ts-check
// // // `@type` JSDoc annotations allow editor autocompletion and type checking
// // // (when paired with `@ts-check`).
// // // There are various equivalent ways to declare your Docusaurus config.
// // // See: https://docusaurus.io/docs/api/docusaurus-config

// // import {themes as prismThemes} from 'prism-react-renderer';

// // // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// // /** @type {import('@docusaurus/types').Config} */
// // const config = {
// //   title: 'My Site',
// //   tagline: 'Dinosaurs are cool',
// //   favicon: 'img/favicon.ico',

// //   // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
// //   future: {
// //     v4: true, // Improve compatibility with the upcoming Docusaurus v4
// //   },

// //   // Set the production url of your site here
// //   url: 'https://paysyslabs.github.io',
// //   // Set the /<baseUrl>/ pathname under which your site is served
// //   // For GitHub pages deployment, it is often '/<projectName>/'
// //   baseUrl: '/openremit-api-specs/',

// //   // GitHub pages deployment config.
// //   // If you aren't using GitHub pages, you don't need these.
// //   organizationName: 'paysyslabs', // Usually your GitHub org/user name.
// //   projectName: 'openremit-api-specs', // Usually your repo name.
// //   deploymentBranch: 'gh-pages',
// //   trailingSlash: false,

// //   onBrokenLinks: 'throw',

// //   // Even if you don't use internationalization, you can use this field to set
// //   // useful metadata like html lang. For example, if your site is Chinese, you
// //   // may want to replace "en" with "zh-Hans".
// //   i18n: {
// //     defaultLocale: 'en',
// //     locales: ['en'],
// //   },

// //   plugins: [
// //     [
// //       '@docusaurus/plugin-client-redirects',
// //       {
// //         redirects: [
// //           {
// //             from: '/',
// //             to: '/docs/overview',
// //           },
// //         ],
// //       },
// //     ],
// //     [
// //       '@scalar/docusaurus',
// //       {
// //         label: 'API Specifications',
// //         route: '/api-specifications',
// //         showNavLink: true,
// //         configuration: {
// //           url: '/openremit-api-specs/openapi/openremit.yml',
// //         },
// //       },
// //     ],
// //   ],

// // // plugins: [
// //   //   [
// //   //     '@scalar/docusaurus',
// //   //     {
// //   //       label: 'API Specifications',
// //   //       route: '/api-specifications',
// //   //       showNavLink: true,
// //   //       configuration: {
// //   //         url: '/openremit-api-specs/openapi/openremit.yml'
// //   //       }
// //   //     }
// //   //   ]
// //   // ],

// //   presets: [
// //     [
// //       'classic',
// //       /** @type {import('@docusaurus/preset-classic').Options} */
// //       ({
// //         docs: {
// //           routeBasePath: 'docs',
// //           sidebarPath: false,  
// //         },

// //         blog: {
// //           showReadingTime: true,
// //           feedOptions: {
// //             type: ['rss', 'atom'],
// //             xslt: true,
// //           },
// //           // Please change this to your repo.
// //           // Remove this to remove the "edit this page" links.
// //           editUrl:
// //             'https://github.com/paysyslabs/openremit-api-specs/tree/main/',
// //           // Useful options to enforce blogging best practices
// //           onInlineTags: 'warn',
// //           onInlineAuthors: 'warn',
// //           onUntruncatedBlogPosts: 'warn',
// //         },
// //         theme: {
// //           customCss: './src/css/custom.css',
// //         },
// //       }),
// //     ],
// //   ],

// //   themeConfig:
// //     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
// //     ({
// //       // Replace with your project's social card
// //       image: 'img/docusaurus-social-card.jpg',
// //       colorMode: {
// //         respectPrefersColorScheme: true,
// //       },
// //         tableOfContents: {
// //         minHeadingLevel: 2,
// //         maxHeadingLevel: 4,
// //       },
// //       navbar: {
// //          title: 'OpenRemit',
// //          logo: {
// //           alt: 'Paysys Labs',
// //           src: 'img/paysys-logo.png',
// //           // href: 'https://www.paysyslabs.com',
// //           target: '_blank',
// //         },
// //         items: [
// //           { to: '/docs/overview', label: 'Overview', position: 'left' },
// //           // { to: '/api-specifications', label: 'API Specifications', position: 'left' },
// //           { to: '/docs/backoffice', label: 'Backoffice', position: 'left' },
// //           {
// //             href: 'https://github.com/paysyslabs/openremit-api-specs',
// //             label: 'GitHub',
// //             position: 'right',
// //           },
// //         ],

// //         // items: [
// //         //   {
// //         //     type: 'docSidebar',
// //         //     sidebarId: 'tutorialSidebar',
// //         //     position: 'left',
// //         //     label: 'Tutorial',
// //         //   },
// //         //   {to: '/blog', label: 'Blog', position: 'left'},
// //         //   {
// //         //     href: 'https://github.com/paysyslabs/openremit-api-specs',
// //         //     label: 'GitHub',
// //         //     position: 'right',
// //         //   },
// //         // ],
// //       },
// //       footer: {
// //         style: 'dark',
// //         links: [
// //           {
// //             title: 'Docs',
// //             items: [
// //               {
// //                 label: 'Tutorial',
// //                 to: '/docs/intro',
// //               },
// //             ],
// //           },
// //           {
// //             title: 'Community',
// //             items: [
// //               {
// //                 label: 'Stack Overflow',
// //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
// //               },
// //               {
// //                 label: 'Discord',
// //                 href: 'https://discordapp.com/invite/docusaurus',
// //               },
// //               {
// //                 label: 'X',
// //                 href: 'https://x.com/docusaurus',
// //               },
// //             ],
// //           },
// //           {
// //             title: 'More',
// //             items: [
// //               {
// //                 label: 'Blog',
// //                 to: '/blog',
// //               },
// //               {
// //                 label: 'GitHub',
// //                 href: 'https://github.com/paysyslabs/openremit-api-specs',
// //               },
// //             ],
// //           },
// //         ],
// //         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
// //       },
// //       prism: {
// //         theme: prismThemes.github,
// //         darkTheme: prismThemes.dracula,
// //       },
// //     }),
// // };

// // export default config;
