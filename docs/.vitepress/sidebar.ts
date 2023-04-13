export const navList = () => [
  {
    text: '文章',
    activeMatch: '',
    link: '',
  },
  {
    text: '学习',
    activeMatch: '^/(front-base|front-framework|algo-data|basics)/',
    items: [
      { text: '前端基础', link: '/front-base/' },
      { text: '前端框架', link: '/front-framework/' },
      { text: '数据结构与算法', link: '/algo-data/' },
      { text: '基础知识', link: '/basics/' },
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
      { text: 'JS核心', link: '' },
      { text: 'Typescript', link: '' },
      { text: '手写实现', link: '' },
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

export const sidebarFrontFramework = () => [
  {
    text: 'Vue',
    collapsed: true,
    items: [
      { text: '核心原理与概念', link: '' },
      { text: 'vue3', link: '' },
      { text: '常见问题', link: '' },
    ],
  },
  {
    text: 'React',
    collapsed: true,
    items: [
      { text: '核心原理与概念', link: '' },
      { text: '常见问题', link: '' },
    ],
  },
];

export const sidebarAlgorithm = () => [
  {
    text: '数据结构',
    collapsed: true,
    items: [
      { text: '数据结构', link: '' },
      { text: '链表', link: '' },
      { text: '树', link: '' },
    ],
  },
  {
    text: '算法',
    collapsed: true,
    items: [
      {
        text: '二分查找',
        link: '',
      },
      { text: '排序', link: '' },
      { text: '双指针', link: '' },
      { text: '动态规划', link: '' },
      { text: '杂七杂八', link: '' },
      { text: '算法思想', link: '' },
      { text: '复杂度', link: '' },
      {
        text: '限流算法',
        link: '',
      },
    ],
  },
  {
    text: '算法题搜集',
    collapsed: true,
  },
];

export const sidebarBasics = () => [
  {
    text: '网络',
    collapsed: true,
    items: [
      { text: 'http', link: '' },
      { text: 'http状态码', link: '' },
      { text: 'https', link: '' },
      { text: 'http-next', link: '' },
      { text: '网络缓存', link: '' },
      { text: '网络连接过程', link: '' },
    ],
  },
  {
    text: '计算机基础',
    collapsed: true,
    items: [
      {
        text: '计算机是怎样跑起来的',
        link: '',
      },
      {
        text: '线程和进程的区别',
        link: '',
      },
    ],
  },
  {
    text: '思维',
    collapsed: true,
    items: [
      { text: '设计模式', link: '' },
      { text: '函数式编程', link: '' },
    ],
  },
];
