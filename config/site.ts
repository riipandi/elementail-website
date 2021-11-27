export const siteMeta = {
  defaultTitle: 'Elementail',
  description: `Just another UI Kit using Tailwind CSS`,
  imageUrl: '/images/og-image.png',
  twitterUsername: '@riipandi',

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  maintenance: process.env.MAINTENANCE_MODE || false,

  socials: {
    GitHub: 'https://github.com/riipandi',
    Twitter: 'https://twitter.com/riipandi'
  }
}
