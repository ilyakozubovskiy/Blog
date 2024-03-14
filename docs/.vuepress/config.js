module.exports = {
  title: 'Ilya Kozubovskiy',
  head: [
    ['link', { rel: 'icon', href: '/images/d365.png' }],
  ],

  base: '/',
  description: 'Blog',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Ilya',
        avatar: '/images/me.png',
        link: 'mailto:ilyakozubovskiy@outlook.com',
        linktext: 'Contact Me',
      }
    ],
    footer: {
      contact: [
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/ilyakozubovskiy/',
        },
        {
          type: 'mail',
          link: 'mailto:ilyakozubovskiy@outlook.com',
        },
        {
          type: 'github',
          link: 'https://github.com/ilyakozubovskiy',
        },
        
      ],
      copyright: [
        {
          text: 'MIT Licensed',
          link: 'https://opensource.org/license/mit/',
        },
       
      ],
    },
    sitemap: {
      hostname: 'https://github.com/ilyakozubovskiy',
    },
    plugins: {
      sitemap: { hostname: 'https://github.com/ilyakozubovskiy' },
      'vuepress-plugin-code-copy': true,
      '@vuepress/back-to-top': true,
    },

    smoothScroll: true,
  },
}
