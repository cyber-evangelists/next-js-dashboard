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
        '2xl': '1440px', // Define your custom breakpoint
        '3xl': '1800px', // Define your custom breakpoint
        '4xl': '2000px', // Define your custom breakpoint
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'primary': ['roboto', 'sans-serif'],
        'secondary' : ['montserrat' , 'sans-serif'],
        'button': ['nunito', 'sans-serif'],
      },
      colors: {
        transparent: "transparent",
        black: {
          500: "#4F5665",
          600: "#0B132A",
          900: "#111827",
        },
        orange: {
          100: "#FFECEC",
          500: "#F53855",
        },
        green: {
          400: "#4ade80",
          500: "#2FAB73",
        },
        gray: {
          50: "#f3f4f6",
          100: "#EEEFF2",
          400: "#AFB5C0",
          500: "#DDDDDD",
          600: "#6b7280",
          700: "#4b5563",
          800: "#6b7280",
        },
        blue: {
          600: "#2563eb",
        },
        red: {
          400: "#f87171",
          500: "#ef4444",
        },
        neutral: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
        },
        slate: {
          100: "#f1f5f9",
          200: "#e2e8f0",
        },
        primary: "#a181fd",
        "primary-variant": "#b8a1ff",
        surface: "#e6e1fd",
      },
    },
  },
  plugins: [],
}
