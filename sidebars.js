/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quick-start/installation',
        'quick-start/first-steps',
        'quick-start/dashboard-overview',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/authentication',
        'api/tracking-script',
        'api/events',
        'api/reporting',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/wordpress',
        'integrations/shopify',
        'integrations/react',
        'integrations/nextjs',
        'integrations/php',
      ],
    },
    {
      type: 'category',
      label: 'Analytics Academy',
      items: [
        'academy/privacy-first-analytics',
        'academy/gdpr-compliance',
        'academy/migration-from-ga',
        'academy/ecommerce-tracking',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/troubleshooting',
        'guides/custom-events',
        'guides/advanced-filtering',
        'guides/data-export',
      ],
    },
  ],
};

export default sidebars;
