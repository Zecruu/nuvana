import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './LanguageContext'
import LanguageToggle from './LanguageToggle'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navigation() {
  const { language } = useLanguage()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle scrolling to anchor when page loads with hash
  useEffect(() => {
    const handleRouteChange = () => {
      if (router.asPath.includes('#')) {
        const hash = router.asPath.split('#')[1]
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100) // Small delay to ensure page is loaded
      }
    }

    // Handle initial load
    handleRouteChange()

    // Handle route changes
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  const navItems = [
    {
      name: language === 'es' ? 'Inicio' : 'Home',
      href: language === 'es' ? '/espanol' : '/',
      id: 'home'
    },
    {
      name: language === 'es' ? 'Servicios' : 'Services',
      href: '#services',
      id: 'services'
    },
    {
      name: language === 'es' ? 'Acerca' : 'About',
      href: '#about',
      id: 'about'
    },
    {
      name: 'Blog',
      href: '/blog',
      id: 'blog'
    },
    {
      name: language === 'es' ? 'Contacto' : 'Contact',
      href: language === 'es' ? '/espanol#contact' : '/#contact',
      id: 'contact'
    }
  ]

  const handleNavClick = (href, id) => {
    setIsMenuOpen(false)

    // Handle anchor links on same page
    if (href.startsWith('#')) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Handle cross-page navigation with anchor (like contact)
    else if (href.includes('#')) {
      // Let the Link component handle the navigation
      // The scrolling will be handled after page load
      return
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-lg border-b border-dark-border/70">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href={language === 'es' ? '/espanol' : '/'}>
          <div className="flex items-center cursor-pointer">
            <img 
              src="/images/Nuvana Logo.jpg" 
              alt={language === 'es' ? 'Nuvana Estudio de Diseño Web' : 'Nuvana Web Design Studio'} 
              className="h-10 w-10 mr-3 rounded-lg border border-dark-border/60" 
            />
            <span className="text-2xl font-cyber font-bold gradient-text">Nuvana</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <span 
                onClick={() => handleNavClick(item.href, item.id)}
                className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer font-medium uppercase tracking-wide"
              >
                {item.name}
              </span>
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-secondary hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-light/95 border-t border-dark-border/70"
          >
            <nav className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <div 
                    onClick={() => handleNavClick(item.href, item.id)}
                    className="block text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer font-medium py-2 uppercase tracking-wide"
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
