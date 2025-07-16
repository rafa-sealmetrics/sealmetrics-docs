import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sealmetrics Documentation',
  tagline: 'Master privacy-first analytics - Build without cookies or consent banners',
  favicon: 'img/favicon.ico',

  url: 'https://docs.sealmetrics.com',
  baseUrl: '/',

  organizationName: 'sealmetrics',
  projectName: 'sealmetrics-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sealmetrics/sealmetrics-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sealmetrics/sealmetrics-docs/tree/main/',
          blogTitle: 'Analytics Insights',
          blogDescription: 'Learn about privacy-first analytics and consentless data collection',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sealmetrics-social-card.jpg',
      navbar: {
        title: 'Sealmetrics',
        logo: {
          alt: 'Sealmetrics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/api',
            label: 'API Reference',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Insights',
            position: 'left'
          },
          {
            href: 'https://app.sealmetrics.com',
            label: 'Dashboard',
            position: 'right',
          },
          {
            href: 'https://sealmetrics.com',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'API Reference',
                to: '/api',
              },
              {
                label: 'Integrations',
                to: '/integrations',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'mailto:support@sealmetrics.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sealmetrics',
              },
            ],
          },
          {
            title: 'Sealmetrics',
            items: [
              {
                label: 'Main Website',
                href: 'https://sealmetrics.com',
              },
              {
                label: 'Dashboard',
                href: 'https://app.sealmetrics.com',
              },
              {
                label: 'Privacy Policy',
                href: 'https://sealmetrics.com/privacy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sealmetrics. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['javascript', 'json', 'bash', 'php'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {name: 'keywords', content: 'analytics, privacy, GDPR, consentless, tracking, sealmetrics, cookieless'},
        {name: 'description', content: 'Learn how to implement privacy-first analytics with Sealmetrics. No cookies, no consent banners, full GDPR compliance.'},
      ],
    }),
};

export default config;
