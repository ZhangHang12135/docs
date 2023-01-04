export default {
    title: '灰沙',
    titleTemplate: '成功的人抄袭，伟大的人剽窃',
    base: '/docs/',
    description: '成功的人抄袭，伟大的人剽窃',
    // 默认语言
    lang: 'en-ZH',
    // 显示上次更新时间
    lastUpdated: true,
    cleanUrls: 'with-subfolders',
    head: [
      [
        'link',
        { rel: 'apple-touch-icon', sizes: '180x180', href: './logo.jpg'}
      ],
      [
        'link',
        { rel: 'icon', sizes: '16x16', href: './logo.jpg'}
      ],
      [
        'link',
        { rel: 'icon', sizes: '32x32', href: './logo.jpg'}
      ],
    ],
    themeConfig: {
        siteTitle: '灰沙',
        logo: '/logo.jpg',
        // 顶部导航
        nav: [
            {
                text: '博客',
                link: 'https://zhanghang12135.github.io/'
            },
        ],
        // 侧边栏
        sidebar: [
            {
              text: '技术',
              items: [
                { 
                  text: 'git',
                  items: [
                    {
                      text: 'git的工作原理',
                      link: '/技术/git/git的工作原理'
                    },
                    {
                      text: 'git的常用命令',
                      link: '/技术/git/git的常用命令'
                    }
                  ]
                },
                // { text: '动态规划', link: '/算法/动态规划' },
              ],
            },
            {
              text: '源码',
              items: [
                { text: 'sentry', link: '/源码/sentry' },
                // { text: '动态规划', link: '/算法/动态规划' },
              ],
          },
            {
                text: '算法',
                items: [
                  // { text: '回溯算法', link: '/算法/回溯算法' },
                  // { text: '动态规划', link: '/算法/动态规划' },
                ],
            },
            {
                text: '设计模式',
                items: [
                  { text: '单例模式', link: '/设计模式/单例模式' },
                  { text: '策略模式', link: '/设计模式/策略模式' },
                ],
            },
            {
              text: '杂文',
              items: [
                // { text: '年终总结', link: '/杂文/web3.0' },
                // { text: 'web3.0', link: '/杂文/web3.0'},
              ],
          }
        ],
        // 文章大纲的层级
        outline: [2, 6],
        // 文章右侧目录标题
        outlineTitle: '目录',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhanghang12135' },
            // You can also add custom icons by passing SVG as string:
            // {
            //   icon: {
            //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            //   },
            //   link: '...'
            // }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
          }
    }
  }
  