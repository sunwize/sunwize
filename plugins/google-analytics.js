import { defineNuxtPlugin } from "nuxt/app";
import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.env.NODE_ENV !== "production")
        return;

    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: "G-MLHG2G84NB",
        },
    });
});
