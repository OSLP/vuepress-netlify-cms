module.exports = {
  title: 'Example',
  description: 'SCRIPT',
head: [
		['link', { rel: 'icon', href: `/favicon.ico` }]
	],
  themeConfig: {
    docsDir: 'docs',
    repo: 'oslp/vuepress-netlify-cms',
    sidebar: [
      '/',
      '/all',
      '/welcome',
     
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
