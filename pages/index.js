import Head from 'next/head'
import { useLanguage } from '../components/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import Blog from '../components/Blog'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>Website Design Puerto Rico | Custom Web Development Services | Nuvana</title>
        <meta name="description" content="Professional website design and development in Puerto Rico. Custom bilingual websites, responsive design, SEO optimization. Get your business online with Nuvana's expert web design services." />
        <meta name="keywords" content="website design Puerto Rico, web development Puerto Rico, custom websites, bilingual web design, responsive web design, SEO services Puerto Rico, website maintenance, website builder Puerto Rico, diseño web Puerto Rico, desarrollo web, sitios web personalizados" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nuvana Web Design Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://nuvana.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuvana.com" />
        <meta property="og:title" content="Professional Website Design Services in Puerto Rico | Nuvana" />
        <meta property="og:description" content="Expert website design and development services in Puerto Rico. Custom bilingual websites, responsive design, and SEO optimization for businesses." />
        <meta property="og:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        <meta property="og:site_name" content="Nuvana Web Design Studio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_PR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nuvana.com" />
        <meta name="twitter:title" content="Professional Website Design Services in Puerto Rico | Nuvana" />
        <meta name="twitter:description" content="Expert website design and development services in Puerto Rico. Custom bilingual websites, responsive design, and SEO optimization." />
        <meta name="twitter:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />

        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href="https://nuvana.com" />
        <link rel="alternate" hrefLang="es" href="https://nuvana.com/espanol" />
        <link rel="alternate" hrefLang="x-default" href="https://nuvana.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://nuvana.com/#website",
                "url": "https://nuvana.com",
                "name": "Nuvana Web Design Studio",
                "description": "Professional website design and development services in Puerto Rico. Custom bilingual websites, e-commerce solutions, and SEO optimization.",
                "inLanguage": ["en-US", "es-PR"],
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://nuvana.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://nuvana.com/#business",
                "name": "Nuvana Web Design Studio",
                "alternateName": "Nuvana",
                "description": "Professional website design and development company specializing in custom bilingual websites, e-commerce solutions, and SEO optimization for businesses in Puerto Rico.",
                "url": "https://nuvana.com",
                "telephone": "+1-787-123-4567",
                "email": "nurvanatec@gmail.com",
                "foundingDate": "2020",
                "areaServed": {
                  "@type": "State",
                  "name": "Puerto Rico"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "PR",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "18.2208",
                  "longitude": "-66.5901"
                },
                "sameAs": [
                  "https://www.facebook.com/nuvana",
                  "https://www.instagram.com/nuvana",
                  "https://www.linkedin.com/company/nuvana"
                ],
                "priceRange": "$$",
                "paymentAccepted": ["Cash", "Credit Card", "PayPal", "Bank Transfer"],
                "currenciesAccepted": "USD"
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://nuvana.com/#service",
                "name": "Website Design and Development Services",
                "provider": {
                  "@id": "https://nuvana.com/#business"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Puerto Rico"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Web Design Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Website Design",
                        "description": "Professional custom website design tailored to your business needs"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Responsive Web Design",
                        "description": "Mobile-friendly responsive websites that work perfectly on all devices"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Optimization",
                        "description": "Search engine optimization to improve your website's visibility"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Bilingual Website Development",
                        "description": "Bilingual websites in English and Spanish for broader market reach"
                      }
                    }
                  ]
                }
              }
            ]
          })
        }} />
      </Head>
      <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
          <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <div className="flex items-center">
              <img src="/images/Nuvana Logo.jpg" alt="Nuvana Web Design Studio - Professional Website Development Puerto Rico" className="h-10 w-10 mr-3 rounded-lg" />
              <span className="text-2xl font-cyber font-bold gradient-text">Nuvana</span>
            </div>
            <LanguageToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          <Hero />
          <div id="about">
            <About />
          </div>
          <Services />
          <div id="portfolio">
            <Portfolio />
          </div>
          <Testimonials />
          <WhyChooseUs />
          <Blog />
          <div id="quote">
            <QuoteForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
