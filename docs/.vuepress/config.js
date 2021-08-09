module.exports = {
    // title: 'Hello VuePress',
    // description: 'Just playing around',
    base: '/docs-test/',
    themeConfig: {
        logo: '/logo.png',
        nav:[
            {
                text:'Docs',
                link:'/dev/'
            },
            {
                text:'FAQ',
                link:'/faq/'
            },
        ],
        sidebar:{
            '/faq/': [
                {
                  title: 'Welcome to zkSync',  // required
                  path: '/faq/', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 0,     // optional, defaults to 1
                },
                {
                  title: 'Overview',  // required
                  path: '/faq/intro.html', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Technology',  // required
                  path: '/faq/tech', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Security',  // required
                  path: '/faq/security', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Wallets',  // required
                  path: '/faq/wallets', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Tokens & Fees',  // required
                  path: '/faq/tokens', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Decentralization',  // required
                  path: '/faq/decentralization', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Tokenomics',  // required
                  path: '/faq/tokenomics', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Smart contracts',  // required
                  path: '/faq/sc', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Privacy',  // required
                  path: '/faq/privacy', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                  title: 'Roadmap',  // required
                  path: '/faq/roadmap', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,     // optional, defaults to 1
                },
                //{
                //    title: 'FAQ',  // required
                //    path: '/faq/', // optional, which should be a absolute path.
                //    collapsable: true,  // optional, defaults to true
                //    sidebarDepth: 1,     // optional, defaults to 1
                //    children: [
                //'/faq/intro',
                //'/faq/tech',
                //'/faq/security',
                //'/faq/wallets',
                //'/faq/tokens',
                //'/faq/decentralization',
                //'/faq/tokenomics',
                //'/faq/sc',
                //'/faq/privacy',
                //'/faq/roadmap',
                //'/faq/status',
                //    ]
                //},
              ],
              '/dev': [
                {
                  title: 'Introduction',  // required
                  path: '/dev/',      // optional, which should be a absolute path.
                  collapsable: false  // optional, defaults to true
                },
                {
                  title: 'Payments',  // required
                  path: '/dev/payments', // optional, which should be a absolute path.
                  collapsable: true,  // optional, defaults to true
                  sidebarDepth: 1,    // optional, defaults to 1
                  children: [
                    '/dev/payments/basic',
                    '/dev/payments/sending_transactions',
                  ]
                },
                {
                  title: 'Smart contracts',  // required
                  path: '/dev/contracts/', // optional, which should be a absolute path.
                  collapsable: false,  // optional, defaults to true
                },
                '/dev/bug-bounty',
                '/dev/nfts',
                '/dev/swaps',
                '/dev/events',
                '/dev/test'
              ],
        }

    },
    smoothScroll: true
    // markdown: {
    //     toc: { includeLevel: [2, 3] }
    // },
  }
