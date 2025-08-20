import { useEffect, useState } from 'react'

export default function PerformanceOptimizer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    if (typeof window === 'undefined') return
    // Preload critical resources
    const preloadCriticalResources = () => {
      if (typeof document === 'undefined') return
      
      const criticalImages = [
        '/images/Nuvana Logo.jpg'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return
      
      // Intersection Observer for lazy loading
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }

    // Optimize Core Web Vitals
    const optimizeCoreWebVitals = () => {
      if (typeof document === 'undefined') return
      
      // Reduce Cumulative Layout Shift (CLS)
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.width || !img.height) {
          img.style.aspectRatio = '16/9' // Default aspect ratio
        }
      })

      // Improve Largest Contentful Paint (LCP)
      const heroImage = document.querySelector('.hero img')
      if (heroImage) {
        heroImage.loading = 'eager'
        heroImage.fetchPriority = 'high'
      }
    }

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration)
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
          })
      }
    }

    // Initialize optimizations
    preloadCriticalResources()
    lazyLoadResources()
    optimizeCoreWebVitals()
    registerServiceWorker()

    // Cleanup function
    return () => {
      // Clean up observers if needed
    }
  }, [])

  return null // This component doesn't render anything
}
