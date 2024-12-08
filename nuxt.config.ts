
export default defineNuxtConfig({
    modules: ["@unocss/nuxt", "nuxt-lucide-icons", "@vueuse/nuxt"],
    unocss: {
        nuxtLayers: true,
    },
    compatibilityDate: "2024-10-25",

    css: ["./assets/tailwind-compat.css"],

    components: [
        {
            path: "./components/base",
            pathPrefix: false,
            prefix: "Prt",
            global: true,
            extensions: ["vue"],
        },
        {
            path: "./components/composite",
            pathPrefix: false,
            prefix: "Prt",
            global: true,
            extensions: ["vue"],
        },
    ],

    build: {
        transpile: ["@iconify/vue", "lucide-vue-next"],
    },
});
