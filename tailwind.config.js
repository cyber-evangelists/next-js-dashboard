/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',  // Define your custom breakpoint
        'md': '768px',  // Define your custom breakpoint
        'lg': '1024px', // Define your custom breakpoint
        'xl': '1200px', // Define your custom breakpoint
        '2xl': '1500px', // Define your custom breakpoint
        '3xl': '1800px', // Define your custom breakpoint
        '4xl': '2000px', // Define your custom breakpoint
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
