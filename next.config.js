/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['nuvana.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Internationalization
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/es',
        permanent: true,
      },
    ]
  },
  
  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/web-design-puerto-rico',
        destination: '/',
      },
      {
        source: '/diseno-web-puerto-rico',
        destination: '/es',
      },
      {
        source: '/custom-website-development',
        destination: '/',
      },
      {
        source: '/desarrollo-sitios-web',
        destination: '/es',
      },
      {
        source: '/bilingual-websites',
        destination: '/',
      },
      {
        source: '/sitios-web-bilingues',
        destination: '/es',
      },
      {
        source: '/ecommerce-development',
        destination: '/',
      },
      {
        source: '/desarrollo-ecommerce',
        destination: '/es',
      },
    ]
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      }
    }
    
    return config
  },
}

module.exports = nextConfig
