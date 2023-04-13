export const navList = () => [
  {
    text: '文章',
    activeMatch: '',
    link: '',
  },
  {
    text: '学习',
    activeMatch: '',
    items: [
      // { text: '基础知识', link: '' },
      { text: '前端基础', link: '/front-base/' },
      // { text: '前端框架', link: '' },
      // { text: '数据结构与算法', link: '' },
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

export const sidebarFrontBase = () => [
  {
    text: 'Javascript',
    collapsed: true,
    items: [
      { text: 'js核心', link: '' },
      { text: 'Typescript', link: '' },
    ],
  },
  {
    text: '浏览器',
    collapsed: true,
    items: [
      { text: '浏览器原理', link: '' },
      { text: 'JS执行机制', link: '' },
      { text: '跨域', link: '' },
    ],
  },
  {
    text: '工程化',
    collapsed: true,
    items: [
      { text: '模块化', link: '' },
      { text: 'webpack', link: '' },
      { text: 'vite', link: '' },
      { text: '包管理', link: '' },
    ],
  },
];
