import { defineConfig } from 'vitepress';
import { navList } from './sidebar';

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
        href: '/blog/favicon.png'
      }
    ]
  ],

  themeConfig: {
    logo: '/logo.jpg',
    nav: navList(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZTH520' }
    ],
    editLink: {
      pattern: 'https://github.com/ZTH520/blog/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Powered By vitepress',
    }
  }
});
