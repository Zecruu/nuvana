import Head from 'next/head'
import { useLanguage } from '../components/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
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
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center">
            <img src="/images/Nuvana Logo.jpg" alt="Nuvana Logo" className="h-10 w-10 mr-3" />
            <span className="text-2xl font-bold text-neon">Nuvana</span>
          </div>
          <LanguageToggle />
        </header>
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <QuoteForm />
        </main>
        <Footer />
      </div>
    </>
  )
}
