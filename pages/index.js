import Head from 'next/head'
import { useLanguage } from '../components/LanguageContext'
import Navigation from '../components/Navigation'
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
        <title>Bilingual Website Design | English & Spanish Web Development Services | Nuvana</title>
        <meta name="description" content="Professional bilingual website design and development. Custom websites in English, Spanish, or both languages. Responsive design, SEO optimization. Expand your global market reach with Nuvana." />
        <meta name="keywords" content="bilingual website design, English Spanish web development, multilingual websites, custom bilingual sites, responsive web design, SEO services, website maintenance, bilingual website builder, diseño web bilingüe, desarrollo web multilingüe, sitios web inglés español" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nuvana Web Design Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://nuvana.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuvana.com" />
        <meta property="og:title" content="Professional Bilingual Website Design Services | Nuvana" />
        <meta property="og:description" content="Expert bilingual website design and development services. Custom websites in English, Spanish, or both languages. Responsive design and SEO optimization for global markets." />
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
                "description": "Professional website design and development services in Puerto Rico. Custom bilingual websites, responsive design, and SEO optimization.",
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
                "description": "Professional website design and development company specializing in custom bilingual websites, responsive design, and SEO optimization for businesses in Puerto Rico.",
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
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="pt-20">
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <Testimonials />
          <WhyChooseUs />
          <Blog />
          <div id="contact">
            <QuoteForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
