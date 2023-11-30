/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 4px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

