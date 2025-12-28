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
          sidebarPath: false,  
        },
        blog: false,  
        theme: {
          customCss: './src/css/custom.css',  
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,  
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
        { to: '/docs/backoffice', label: 'Backoffice', position: 'left' },  
      ],
    },

    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs.`,
    },

    prism: {
      theme: prismThemes.github,  
      darkTheme: prismThemes.dracula,  
    },
  },
};

export default config;
