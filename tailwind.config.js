/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cardio-navy': {
          DEFAULT: '#0B192C',
          dark: '#07101D',
          light: '#152744',
          surface: '#102138',
        },
        'cardio-navy-dark': '#07101D',
        'cardio-navy-light': '#152744',
        'cardio-navy-surface': '#102138',
        'cardio-red': {
          DEFAULT: '#E63946',
          hover: '#D62839',
        },
        'cardio-red-hover': '#D62839',
        'vitality-amber': {
          DEFAULT: '#D4A373',
          light: '#E0A96D',
        },
        'vitality-amber-light': '#E0A96D',
        'clinical-ice': '#F0F4F8',
        'clinical-mint': '#E2F1E7',
        'whatsapp-emerald': '#25D366',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        ecgPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.04)', opacity: '1' },
        },
      },
      animation: {
        'pulse-cardio': 'ecgPulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    function({ addBase, addUtilities }) {
      addBase({
        ':root': {
          '--font-montserrat': "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          '--font-inter': "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
      });
      addUtilities({
        '.heart-text-glow': {
          textShadow: '0 0 25px rgba(230, 57, 70, 0.65), 0 0 50px rgba(230, 57, 70, 0.35)',
        },
        '.cardio-glass': {
          background: 'rgba(16, 33, 56, 0.85)',
          backdropFilter: 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
        '.amber-badge-glow': {
          boxShadow: '0 0 15px rgba(212, 163, 115, 0.25)',
        },
        '.pulse-cardio': {
          animation: 'ecgPulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      });
    },
  ],
};
