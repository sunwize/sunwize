export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
  },
  css: ['~/assets/style/main.scss'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
  ],
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  build: {
    transpile: ['mdi-vue'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dh0ymuppr/image/upload/v1672608952/portfolio',
    },
  },
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    download: true,
    families: {
      Poppins: [300, 400, 500, 700, 900],
    },
  },
});
