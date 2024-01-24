module.exports = {
  title: 'Ilya Kozubovskiy',
  head: [
    ['link', { rel: 'icon', href: '/images/mountains.jpg' }],
   ],

  base: '/',
  description: 'Blog',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Ilya',
        avatar: '/public/me.png',
        link: 'https://www.linkedin.com/in/ilyakozubovskiy/',
        linktext: 'Contact Me',
      },
    ],
    footer: {
      contact: [
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/terms-and-conditions/',
        },
        {
          text: 'Hello World',
          link: 'microsoft.com',
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
