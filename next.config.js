/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: ['nuvana.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Remove i18n config to avoid routing conflicts
  
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
  
  // Rewrites for SEO-optimized URLs targeting website builder keywords
  async rewrites() {
    return [
      // Website builder focused URLs
      {
        source: '/best-website-builder-2024',
        destination: '/',
      },
      {
        source: '/website-builder',
        destination: '/',
      },
      {
        source: '/custom-website-builder',
        destination: '/',
      },
      {
        source: '/professional-website-builder',
        destination: '/',
      },
      {
        source: '/small-business-website-builder',
        destination: '/',
      },
      {
        source: '/ecommerce-website-builder',
        destination: '/',
      },
      {
        source: '/drag-drop-website-builder',
        destination: '/',
      },
      {
        source: '/seo-website-builder',
        destination: '/',
      },
      // Legacy URLs
      {
        source: '/web-design-puerto-rico',
        destination: '/',
      },
      {
        source: '/diseno-web-puerto-rico',
        destination: '/espanol',
      },
      {
        source: '/custom-website-development',
        destination: '/',
      },
      {
        source: '/bilingual-websites',
        destination: '/',
      },
      {
        source: '/responsive-web-design',
        destination: '/',
      },
    ]
  },
  
  // Experimental features for performance
  experimental: {
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
