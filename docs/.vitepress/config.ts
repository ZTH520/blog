import { defineConfig } from 'vitepress'
import { navList, sidebarAlgorithm, sidebarBasics, sidebarFrontBase, sidebarFrontFramework } from './sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: 'zthCn',
  lastUpdated: true,
  base: '/blog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/blog/favicon.png',
      },
    ],
  ],

  themeConfig: {
    logo: '/logo.jpg',
    nav: navList(),
    sidebar: {
      '/front-base/': sidebarFrontBase(),
      '/front-framework/': sidebarFrontFramework(),
      '/basics/': sidebarBasics(),
      '/algo-data/': sidebarAlgorithm(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ZTH520' }],
    editLink: {
      pattern: 'https://github.com/ZTH520/blog/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Powered By vitepress',
    },
    outline: {
      label: '快速导航',
    },
    lastUpdatedText: '最近更新',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '切换',
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
  },
  markdown: {
    theme: {
      light: 'solarized-light',
      dark: 'solarized-dark',
    },
    lineNumbers: true,
  },
})
