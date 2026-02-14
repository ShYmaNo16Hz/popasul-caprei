// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    domains: ['lh3.googleusercontent.com']
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vue3-carousel-nuxt", "@nuxt/image"],
  app: {
    head: {
      htmlAttrs: {
        lang: "ro",
      },
      title: "Popasul Caprei",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: `https://popasul-caprei.vercel.app/thumbnail.webp`,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/main.css"],
    runtimeConfig: {
    // Private,

    // Public
    public: {
      domainURL: 'https://popasul-caprei.vercel.app',
      contactFacebook: 'https://www.facebook.com/PopasulCapreiOstra',
      contactYouTube: 'https://www.youtube.com/user/HotelToacaBellevue',
      contactInstagram: 'https://www.instagram.com/popasulcaprei',
      contactTikTok: 'www.google.com',
      contactEmail: 'toacabellevue@yahoo.com',
      contactPhone: '+40758237440',
      contactAddress: 'Toaca Bellevue, Str. Gheorghe Lazăr nr. 12, Gura Humorului 725300',
    },
  },
});
