// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'MyAccess Operations Hub',

  tagline: 'Interactive IAM Operational Runbooks',

  favicon: 'img/favicon.ico',

  url: 'https://chandanhegde7.github.io',

  baseUrl: '/myaccess-operations-hub/',

  organizationName: 'chandanhegde7',

  projectName: 'myaccess-operations-hub',

  trailingSlash: false,

  onBrokenLinks: 'warn',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,

    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',

          routeBasePath: '/',

          showLastUpdateAuthor: true,

          showLastUpdateTime: true,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social-card.png',

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      announcementBar: {
        id: 'support_banner',

        content:
          '🚀 Interactive IAM Operational Runbooks for GXS MyAccess Support Team',

        backgroundColor: '#0f172a',

        textColor: '#ffffff',

        isCloseable: true,
      },

      navbar: {
        title: 'MyAccess Ops Hub',

        items: [
          {
            to: '/',
            label: 'Dashboard',
            position: 'left',
          },

          {
            to: 'daily-tasks/task-6-provisioning-failures',
            label: 'Daily Tasks',
            position: 'left',
          },

          {
            to: 'emergency/workday-aggregation-failure',
            label: 'Emergency',
            position: 'left',
          },

          {
            type: 'search',
            position: 'right',
          },

          {
            href: 'https://github.com/chandanhegde7/myaccess-operations-hub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Operations',

            items: [
              {
                label: 'Daily Tasks',
                to: 'daily-tasks/task-6-provisioning-failures',
              },

              {
                label: 'Emergency SOPs',
                to: 'emergency/workday-aggregation-failure',
              },
            ],
          },

          {
            title: 'Platform',

            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/chandanhegde7/myaccess-operations-hub',
              },
            ],
          },

          {
            title: 'Support',

            items: [
              {
                label: 'Operations Dashboard',
                to: '/',
              },
            ],
          },
        ],

        copyright:
          `© ${new Date().getFullYear()} MyAccess Operations Hub`,
      },

      prism: {
        theme: prismThemes.github,

        darkTheme: prismThemes.dracula,

        additionalLanguages: [
          'bash',
          'json',
          'sql',
          'powershell',
          'yaml',
        ],
      },
    }),
};

export default config;