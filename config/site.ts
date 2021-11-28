export const siteMeta = {
  defaultTitle: 'Headunit',
  description: `Headless Content Management System powered by Next.js`,
  imageUrl: '/images/og-image.png',
  twitterUsername: '@riipandi',

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  maintenance: process.env.MAINTENANCE_MODE || true,

  socials: {
    GitHub: 'https://github.com/riipandi',
    Twitter: 'https://twitter.com/riipandi'
  }
}
