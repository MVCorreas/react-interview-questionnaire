/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        // 'primary-light': 'var(--color-primary-light)',
        // secondary: 'var(--color-secondary)',
        // background: 'var(--color-background)',
        // textPrimary: 'var(--color-text-primary)',
        // textSecondary: 'var(--color-text-secondary)',
        // textButton: 'var(--color-text-button)',
      },
    },
  },

}

export default config