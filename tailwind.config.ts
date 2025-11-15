import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F4F',
        secondary: '#90B8A8',
        accent: '#6B4E3D',
        background: '#F5F5F0',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['32px', { fontWeight: '700', lineHeight: '1.2' }],
        'heading-md': ['24px', { fontWeight: '600', lineHeight: '1.3' }],
        'heading-sm': ['20px', { fontWeight: '600', lineHeight: '1.4' }],
        'body': ['16px', { fontWeight: '400', lineHeight: '1.5' }],
        'caption': ['14px', { fontWeight: '500', lineHeight: '1.4' }],
        'button': ['16px', { fontWeight: '600', lineHeight: '1' }],
      },
      borderRadius: {
        'card': '20px',
        'button': '16px',
        'input': '12px',
        'chip': '8px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.08)',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
    },
  },
  plugins: [],
}
export default config
