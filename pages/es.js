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

export default function SpanishHome() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>Diseño Web Puerto Rico | Desarrollo de Sitios Web Personalizados | Nuvana</title>
        <meta name="description" content="Diseño web profesional y desarrollo en Puerto Rico. Sitios web personalizados bilingües, tiendas online, optimización SEO. Lleva tu negocio online con los servicios expertos de diseño web de Nuvana." />
        <meta name="keywords" content="diseño web Puerto Rico, desarrollo web Puerto Rico, sitios web personalizados, diseño web bilingüe, desarrollo ecommerce, servicios SEO Puerto Rico, diseño web responsivo, creador de sitios web Puerto Rico, website design Puerto Rico, desarrollo sitios web" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nuvana Estudio de Diseño Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://nuvana.com/es" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuvana.com/es" />
        <meta property="og:title" content="Servicios Profesionales de Diseño Web en Puerto Rico | Nuvana" />
        <meta property="og:description" content="Servicios expertos de diseño y desarrollo web en Puerto Rico. Sitios web personalizados bilingües, soluciones de comercio electrónico y optimización SEO para negocios." />
        <meta property="og:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        <meta property="og:site_name" content="Nuvana Estudio de Diseño Web" />
        <meta property="og:locale" content="es_PR" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nuvana.com/es" />
        <meta name="twitter:title" content="Servicios Profesionales de Diseño Web en Puerto Rico | Nuvana" />
        <meta name="twitter:description" content="Servicios expertos de diseño y desarrollo web en Puerto Rico. Sitios web personalizados bilingües, soluciones de comercio electrónico y optimización SEO." />
        <meta name="twitter:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="es" href="https://nuvana.com/es" />
        <link rel="alternate" hrefLang="en" href="https://nuvana.com" />
        <link rel="alternate" hrefLang="x-default" href="https://nuvana.com" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://nuvana.com/es#website",
                "url": "https://nuvana.com/es",
                "name": "Nuvana Estudio de Diseño Web",
                "description": "Servicios profesionales de diseño y desarrollo web en Puerto Rico. Sitios web personalizados bilingües, soluciones de comercio electrónico y optimización SEO.",
                "inLanguage": "es-PR",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://nuvana.com/es?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://nuvana.com/es#business",
                "name": "Nuvana Estudio de Diseño Web",
                "alternateName": "Nuvana",
                "description": "Empresa profesional de diseño y desarrollo web especializada en sitios web personalizados bilingües, soluciones de comercio electrónico y optimización SEO para negocios en Puerto Rico.",
                "url": "https://nuvana.com/es",
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
                "paymentAccepted": ["Efectivo", "Tarjeta de Crédito", "PayPal", "Transferencia Bancaria"],
                "currenciesAccepted": "USD"
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://nuvana.com/es#service",
                "name": "Servicios de Diseño y Desarrollo Web",
                "provider": {
                  "@id": "https://nuvana.com/es#business"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Puerto Rico"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Servicios de Diseño Web",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Diseño Web Personalizado",
                        "description": "Diseño web profesional personalizado adaptado a las necesidades de tu negocio"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Desarrollo de Comercio Electrónico",
                        "description": "Desarrollo completo de sitios web de comercio electrónico con integración de pagos"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Optimización SEO",
                        "description": "Optimización para motores de búsqueda para mejorar la visibilidad de tu sitio web"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Desarrollo de Sitios Web Bilingües",
                        "description": "Sitios web bilingües en inglés y español para mayor alcance de mercado"
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
              <img src="/images/Nuvana Logo.jpg" alt="Nuvana Estudio de Diseño Web - Desarrollo Web Profesional Puerto Rico" className="h-10 w-10 mr-3 rounded-lg" />
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
