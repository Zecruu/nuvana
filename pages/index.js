import Head from 'next/head'
import { useLanguage } from '../components/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>Nuvana | Custom Web Design Puerto Rico</title>
        <meta name="description" content="Nuvana builds stunning, bilingual websites and SEO for Puerto Rican businesses. Get your free quote!" />
        <meta name="keywords" content="web design, Puerto Rico, SEO, bilingual, custom websites, Nuvana" />
        <meta property="og:title" content="Nuvana | Custom Web Design Puerto Rico" />
        <meta property="og:description" content="Nuvana builds stunning, bilingual websites and SEO for Puerto Rican businesses." />
        <meta property="og:image" content="/images/Nuvana Logo.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Nuvana",
            "url": "https://nuvana.com",
            "description": "Custom web design and SEO in Puerto Rico. Bilingual, modern, and SEO-optimized websites.",
            "inLanguage": ["en", "es"],
            "contactPoint": [{
              "@type": "ContactPoint",
              "email": "nurvanatec@gmail.com",
              "telephone": "+1-787-123-4567",
              "contactType": "customer service",
              "areaServed": "PR"
            }]
          })
        }} />
      </Head>
      <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
          <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <div className="flex items-center">
              <img src="/images/Nuvana Logo.jpg" alt="Nuvana Logo" className="h-10 w-10 mr-3 rounded-lg" />
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
          <div id="quote">
            <QuoteForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
