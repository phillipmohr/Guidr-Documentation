import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Guidr Documentation",
  description: "Guidr Documentation – Setup & Developer Docs",
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/images/guidr-logo-mark.png' }
    ]
  ],
  themeConfig: {
    logo: '/images/guidr-logo-mark.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup & Usage', link: '/usage/getting-started' },
      { text: 'For Developers', link: '/dev/getting-started' }
    ],

    sidebar: {
      // Sidebar für Setup & Usage
      '/usage/': [
        {
          text: 'Setup & Usage',
          items: [
            { text: 'Getting Started', link: '/usage/getting-started' },
          ]
        },
        {
          text: 'Create your Widget',
          items: [
            { text: 'General Form', link: '/usage/general-form' },
            { text: 'Steps Form', link: '/usage/steps-form' },
            { text: 'Branding Form', link: '/usage/branding-form' },
            { text: 'Analytics', link: '/usage/analytics' },
            { text: 'Embed', link: '/usage/embed' }
          ]
        }
      ],

      // Sidebar für Developer-Doku
      '/dev/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/dev/getting-started' }
          ]
        },
        {
          text: 'Widget API',
          items: [
            { text: 'Event Hooks', link: '/dev/hooks' },
            { text: 'Methods', link: '/dev/methods' }
          ]
        }
      ]
    }
  }
})
