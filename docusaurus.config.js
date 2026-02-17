// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenRemit',
  tagline: 'API Documentation for OpenRemit',
  favicon: 'favicon.ico?v=2',

  future: {
    v4: true, // Ensure compatibility with the upcoming Docusaurus v4
  },

  url: 'https://paysyslabs.github.io',  
  baseUrl: '/OpenRemit/',  

  organizationName: 'paysyslab', 
  projectName: 'OpenRemit',
  deploymentBranch: 'gh-pages',  
  trailingSlash: false,  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',  

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@scalar/docusaurus',  
      {
        label: 'API Specifications',
        route: '/api-specifications',
        showNavLink: true,  
        configuration: {
          url: './openapi/openremit.yml',  
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',  
          sidebarPath: require.resolve('./sidebars.js'),  
        },
        blog: false,  
        theme: {
          customCss: './src/css/custom.css',  
        },
      },
    ],
  ],

  
  themeConfig: {
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      },
      
      imageZoom: {
        selector: '.theme-doc-markdown img',
        options: {
          margin:24,
          background: '#000',
        },
      },
    tableOfContents: {
      minHeadingLevel: 2,  
      maxHeadingLevel: 4,  
    },

    navbar: {
      logo: {
        alt: 'Paysys Labs',
        src: 'img/openremit-logo.png',  
      },
      items: [
        { to: '/docs/overview', label: 'Overview', position: 'left' },  
        { to: '/docs/back-office/logging-in-and-changing-password', label: 'Get Started', position: 'left' },  
        { to: '/docs/developer-workflow', label: 'Developer Workflow', position: 'left'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs.`,
    },
  },
};

export default config;
