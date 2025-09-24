module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8a040',
        'primary-light': '#e2c27e',
        'primary-dark': '#9c7a2f',
        secondary: '#111111',
        'secondary-light': '#1c1c1c',
        accent: '#f5f5f5',
        'accent-light': '#faf8f1',
        'dark-bg': '#050505',
        'dark-card': '#141414',
        'dark-border': '#242424',
        'text-primary': '#f5f5f5',
        'text-secondary': '#b3b3b3',
        'text-accent': '#d9d9d9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(200, 160, 64, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 160, 64, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'primary': '0 0 20px rgba(200, 160, 64, 0.35)',
        'primary-lg': '0 0 40px rgba(200, 160, 64, 0.45)',
        'secondary': '0 0 30px rgba(26, 26, 26, 0.4)',
        'glass': '0 8px 32px 0 rgba(12, 12, 12, 0.6)',
        'elegant': '0 12px 48px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
