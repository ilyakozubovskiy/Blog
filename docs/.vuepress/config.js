module.exports = {
    title: "Ilya Kozubovskiy",
    descciption: "ScienceSoft",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'About me', link: '/about-me/' },
            { text: 'GitHub', link: 'https://github.com/ilyakozubovskiy/' }
        ],
        // sidebar: 'auto'
    },
    base: '/blog/',
    plugins: [
        ['@vuepress/search', {
          searchMaxSuggestions: 10
        }]
      ]
}