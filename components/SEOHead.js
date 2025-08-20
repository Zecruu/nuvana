import Head from 'next/head'

export default function SEOHead({ 
  title = "Best Website Builder 2024 | Professional Website Design & Development | Nuvana",
  description = "#1 Website Builder & Design Agency. Create stunning websites with our professional web design services. Custom website builder, e-commerce solutions, SEO optimization. Build your dream website today!",
  keywords = "website builder, best website builder 2024, professional website design, custom website builder, web design agency, website development, e-commerce website builder, responsive website design, SEO website builder",
  canonical = "https://nuvana.com",
  ogImage = "https://nuvana.com/images/Nuvana Logo.jpg",
  jsonLd = null
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Nuvana - Professional Website Builder & Design Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
      
      {/* Performance & Core Web Vitals */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="color-scheme" content="dark light" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="language" content="en, es" />
      <meta name="geo.region" content="US-PR" />
      <meta name="geo.placename" content="Puerto Rico" />
      <meta name="geo.position" content="18.2208;-66.5901" />
      <meta name="ICBM" content="18.2208, -66.5901" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nuvana - Best Website Builder 2024" />
      <meta property="og:site_name" content="Nuvana - Professional Website Builder" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_PR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Nuvana - Best Website Builder 2024" />
      <meta name="twitter:creator" content="@nuvana" />
      <meta name="twitter:site" content="@nuvana" />
      
      {/* Structured Data */}
      {jsonLd && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
      )}
    </Head>
  )
}
