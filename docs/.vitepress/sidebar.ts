import type { Config as ThemeConfig } from '@vue/theme';
export const navList = () => [
  {
    text: '文章',
    activeMatch: '/article/',
    link: '/article/'
  },
  {
    text: '学习',
    activeMatch: '',
    items: [
      { text: '前端基础', link: '' },
    ],
  },
  {
    text: '工作',
    activeMatch: '',
    link: ''
  },
  {
    text: '生活',
    activeMatch: '',
    link: ''
  },
] as ThemeConfig['nav'];
