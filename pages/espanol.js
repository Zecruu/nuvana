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

export default function SpanishHome() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>Diseño Web Puerto Rico | Desarrollo de Sitios Web Personalizados | Nuvana</title>
        <meta name="description" content="Diseño web profesional y desarrollo en Puerto Rico. Sitios web personalizados bilingües, diseño responsivo, optimización SEO. Lleva tu negocio online con los servicios expertos de diseño web de Nuvana." />
        <meta name="keywords" content="diseño web Puerto Rico, desarrollo web Puerto Rico, sitios web personalizados, diseño web bilingüe, diseño web responsivo, servicios SEO Puerto Rico, mantenimiento web, creador de sitios web Puerto Rico, website design Puerto Rico, desarrollo sitios web" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nuvana Estudio de Diseño Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://nuvana.com/espanol" />

        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="apple-touch-icon" href="/images/Nuvana Logo.jpg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuvana.com/espanol" />
        <meta property="og:title" content="Servicios Profesionales de Diseño Web en Puerto Rico | Nuvana" />
        <meta property="og:description" content="Servicios expertos de diseño y desarrollo web en Puerto Rico. Sitios web personalizados bilingües, diseño responsivo y optimización SEO para negocios." />
        <meta property="og:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        <meta property="og:site_name" content="Nuvana Estudio de Diseño Web" />
        <meta property="og:locale" content="es_PR" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nuvana.com/espanol" />
        <meta name="twitter:title" content="Servicios Profesionales de Diseño Web en Puerto Rico | Nuvana" />
        <meta name="twitter:description" content="Servicios expertos de diseño y desarrollo web en Puerto Rico. Sitios web personalizados bilingües, diseño responsivo y optimización SEO." />
        <meta name="twitter:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hreflang="es" href="https://nuvana.com/espanol" />
        <link rel="alternate" hreflang="en" href="https://nuvana.com" />
        <link rel="alternate" hreflang="x-default" href="https://nuvana.com" />
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
