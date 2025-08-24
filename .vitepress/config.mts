import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Guidr Documentation",
  description: "Guidr Documemtnation – For Developers and Non-Technical",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Widget API',
        items: [
          { text: 'Event Hooks', link: '/hooks' },
          { text: 'Methods', link: '/methods' }
        ]
      },
    ],
  }
})
