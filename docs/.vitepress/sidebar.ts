import type { Config as ThemeConfig } from '@vue/theme';

export const navList = (): ThemeConfig['nav'] => [
  {
    text: '文章',
    activeMatch: '/article/',
    link: '/article/',
  },
  {
    text: '学习',
    activeMatch: '',
    items: [
      { text: '基础知识', link: '' },
      { text: '前端基础', link: '' },
      { text: '前端框架', link: '' },
      { text: '数据结构与算法', link: '' },
    ],
  },
  {
    text: '工作',
    activeMatch: '',
    link: '',
  },
  {
    text: '生活',
    activeMatch: '',
    link: '',
  },
];
