import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'navy-deep': 'var(--navy-deep)',
        'navy-mid': 'var(--navy-mid)',
        'moonstone': 'var(--moonstone)',
        'saffron': 'var(--saffron)',
        'saffron-glow': 'var(--saffron-glow)',
        'glass-tint': 'var(--glass-tint)',
        'glass-border': 'var(--glass-border)',
        'foreground': 'var(--foreground)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'card': 'var(--card)',
        'border': 'var(--border)',
      },
    },
  },
  plugins: [],
} satisfies Config
