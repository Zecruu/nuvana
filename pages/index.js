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
import FloatingChatButton from '../components/FloatingChatButton'

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>Best Website Builder 2024 | Professional Website Design & Development | Nuvana</title>
        <meta name="description" content="#1 Website Builder & Design Agency. Create stunning websites with our professional web design services. Custom website builder, e-commerce solutions, SEO optimization. Build your dream website today!" />
        <meta name="keywords" content="website builder, best website builder 2024, professional website design, custom website builder, web design agency, website development, e-commerce website builder, responsive website design, SEO website builder, drag and drop website builder, small business website builder, affordable website design, website builder for business, create website, build website, website maker, web design services, professional web development" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nuvana - Professional Website Builder & Design Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://nuvana.com" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="en, es" />
        <meta name="geo.region" content="US-PR" />
        <meta name="geo.placename" content="Puerto Rico" />
        <meta name="geo.position" content="18.2208;-66.5901" />
        <meta name="ICBM" content="18.2208, -66.5901" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="Puerto Rico" />
        <meta name="business:contact_data:locality" content="San Juan" />
        <meta name="business:contact_data:region" content="PR" />
        <meta name="business:contact_data:postal_code" content="00901" />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="business:contact_data:email" content="nurvanatec@gmail.com" />
        <meta name="business:contact_data:phone_number" content="+1-787-123-4567" />
        <meta name="business:contact_data:website" content="https://nuvana.com" />

        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="apple-touch-icon" href="/images/Nuvana Logo.jpg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuvana.com" />
        <meta property="og:title" content="Best Website Builder 2024 | Professional Website Design & Development | Nuvana" />
        <meta property="og:description" content="#1 Website Builder & Design Agency. Create stunning websites with our professional web design services. Custom website builder, e-commerce solutions, SEO optimization. Build your dream website today!" />
        <meta property="og:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nuvana - Best Website Builder 2024" />
        <meta property="og:site_name" content="Nuvana - Professional Website Builder" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_PR" />
        <meta property="business:contact_data:street_address" content="Puerto Rico" />
        <meta property="business:contact_data:locality" content="San Juan" />
        <meta property="business:contact_data:region" content="PR" />
        <meta property="business:contact_data:country_name" content="United States" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nuvana.com" />
        <meta name="twitter:title" content="Best Website Builder 2024 | Professional Website Design | Nuvana" />
        <meta name="twitter:description" content="#1 Website Builder & Design Agency. Create stunning websites with our professional web design services. Build your dream website today!" />
        <meta name="twitter:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        <meta name="twitter:image:alt" content="Nuvana - Best Website Builder 2024" />
        <meta name="twitter:creator" content="@nuvana" />
        <meta name="twitter:site" content="@nuvana" />

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
                "name": "Nuvana - Best Website Builder 2024",
                "alternateName": ["Nuvana Website Builder", "Professional Website Design Agency", "Custom Website Builder"],
                "description": "#1 Website Builder & Design Agency. Create stunning websites with our professional web design services. Custom website builder, e-commerce solutions, SEO optimization.",
                "inLanguage": ["en-US", "es-PR"],
                "keywords": "website builder, best website builder 2024, professional website design, custom website builder, web design agency",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://nuvana.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "mainEntity": {
                  "@id": "https://nuvana.com/#business"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://nuvana.com/#business",
                "name": "Nuvana - Best Website Builder & Design Agency",
                "alternateName": ["Nuvana Website Builder", "Nuvana Web Design", "Professional Website Builder"],
                "description": "#1 Website Builder & Design Agency specializing in professional website design, custom website builder solutions, e-commerce development, and SEO optimization. Serving businesses worldwide with bilingual capabilities.",
                "url": "https://nuvana.com",
                "telephone": "+1-787-123-4567",
                "email": "nurvanatec@gmail.com",
                "foundingDate": "2020",
                "slogan": "Build Your Dream Website Today",
                "keywords": "website builder, best website builder 2024, professional website design, custom website builder, web design agency, e-commerce website builder",
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Puerto Rico"
                  },
                  {
                    "@type": "Country",
                    "name": "United States"
                  },
                  {
                    "@type": "Place",
                    "name": "Worldwide"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "San Juan",
                  "addressRegion": "PR",
                  "postalCode": "00901",
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
                  "https://www.linkedin.com/company/nuvana",
                  "https://twitter.com/nuvana"
                ],
                "priceRange": "$$",
                "paymentAccepted": ["Cash", "Credit Card", "PayPal", "Bank Transfer", "Cryptocurrency"],
                "currenciesAccepted": "USD",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "openingHours": "Mo-Fr 09:00-18:00",
                "availableLanguage": ["English", "Spanish"]
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://nuvana.com/#service",
                "name": "Professional Website Builder & Design Services",
                "provider": {
                  "@id": "https://nuvana.com/#business"
                },
                "serviceType": "Website Builder & Web Design Agency",
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "United States"
                  },
                  {
                    "@type": "Place",
                    "name": "Worldwide"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Website Builder & Design Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Website Builder",
                        "description": "Professional custom website builder with drag-and-drop functionality, perfect for businesses of all sizes",
                        "category": "Website Builder"
                      },
                      "priceRange": "$$"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Website Builder",
                        "description": "Complete e-commerce website builder with shopping cart, payment processing, and inventory management",
                        "category": "E-commerce Solutions"
                      },
                      "priceRange": "$$$"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Website Builder",
                        "description": "SEO-optimized website builder that helps your site rank #1 on Google and other search engines",
                        "category": "SEO Services"
                      },
                      "priceRange": "$$"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Responsive Website Design",
                        "description": "Mobile-first responsive website design that works perfectly on all devices and screen sizes",
                        "category": "Web Design"
                      },
                      "priceRange": "$$"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Small Business Website Builder",
                        "description": "Affordable website builder specifically designed for small businesses and startups",
                        "category": "Small Business Solutions"
                      },
                      "priceRange": "$"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://nuvana.com/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What makes Nuvana the best website builder in 2024?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nuvana is the best website builder because we combine professional design expertise with cutting-edge technology. Our custom website builder offers drag-and-drop functionality, SEO optimization, mobile responsiveness, and bilingual capabilities - all backed by our expert design team."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does it cost to build a website with Nuvana?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our website builder pricing starts from affordable packages for small businesses to enterprise solutions. We offer custom quotes based on your specific needs, including e-commerce functionality, SEO optimization, and ongoing support."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I build an e-commerce website with Nuvana?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Our e-commerce website builder includes shopping cart functionality, secure payment processing, inventory management, and mobile optimization. Perfect for online stores of any size."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide SEO services with your website builder?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Every website we build includes comprehensive SEO optimization to help you rank higher on Google. Our SEO website builder ensures your site is search engine friendly from day one."
                    }
                  }
                ]
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
        <FloatingChatButton />
      </div>
    </>
  )
}
