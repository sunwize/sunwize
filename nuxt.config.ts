// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" }],
    },
    css: [
        "~/assets/style/global.scss",
    ],
    modules: [
        "@nuxtjs/google-fonts",
        "@nuxtjs/tailwindcss",
        "@vueuse/motion/nuxt",
        "@nuxt/image-edge",
    ],
    build: {
        // @ts-ignore
        postcss: require("./postcss.config.js"),
        transpile: ["mdi-vue"],
    },
    googleFonts: {
        display: "swap",
        useStylesheet: true,
        inject: true,
        download: true,
        families: {
            Poppins: [300, 400, 500, 700, 900],
        },
    },
    tailwindcss: {
        cssPath: "~/assets/style/tailwind.css",
    },
    nitro: {
        compressPublicAssets: true,
        minify: true,
    },
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/dh0ymuppr/image/upload/v1672608952/portfolio",
        },
    },
});
