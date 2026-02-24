<script setup>
const router = useRouter();
const currentRoute = router.currentRoute;
const config = useRuntimeConfig();
const fullUrl = `${config.public.domainURL}${currentRoute.value.fullPath}`;
useSeoMeta({
  title: "Popasul Caprei - Preparate tradiționale din Bucovina",
  description:
    "Restaurant Popasul Caprei din Bucovina te așteaptă cu preparate tradiționale, ingrediente locale și gusturi autentice care amintesc de copilărie.",
  keywords:
    "restaurant Bucovina, Popasul Caprei, preparate tradiționale, mâncare autentică, ingrediente locale",
  ogUrl: fullUrl,
  ogTitle: "Popasul Caprei - Preparate tradiționale din Bucovina",
  ogDescription:
    "Descoperă la Popasul Caprei din Bucovina savoarea preparatelor tradiționale din ingrediente locale.",
  ogType: "website",
});
</script>
<template>
  <div class="overflow-hidden">
    <TheHomeHeader />
    <div class="position-relative px-1 px-sm-3 px-xl-0">
      <nuxt-img src="/page-bg.webp" class="page-bg" />
      <div class="container-xl mb-5">
        <TheCardLocationMain />
      </div>
    </div>

    <div class="mt-5 pt-5">
      <div class="text-center mb-5 pb-4 px-1 px-sm-3 px-xl-0">
        <div class="section-title mb-3">Meniu autentic, gust adevărat</div>
        <div class="text-neutral-500">
          Bucovina în farfurie: preparate tradiționale, ingrediente locale și
          gusturi care amintesc de copilărie. <br />
          Alege din meniul nostru vizual și lasă-te inspirat de aromele casei.
        </div>
      </div>

      <carousel
        :breakpoints="breakPoints"
        :wrap-around="true"
        :pause-autoplay-on-hover="true"
        :autoplay="2500"
      >
        <slide v-for="(prod, index) in products">
          <div class="px-3">
            <TheProductCard :product="prod" @view-product="ViewProduct" />
          </div>
        </slide>
      </carousel>

      <div class="text-center">
        <NuxtLink
          to="/meniu"
          class="btn btn-light-brown d-inline-flex align-items-center mt-5"
        >
          <span class="me-2">Meniu</span>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4375 5V13.125C16.4375 13.3736 16.3388 13.6121 16.1629 13.7879C15.9871 13.9637 15.7487 14.0625 15.5 14.0625C15.2514 14.0625 15.0129 13.9637 14.8371 13.7879C14.6613 13.6121 14.5625 13.3736 14.5625 13.125V7.26562L6.16331 15.6633C5.98719 15.8394 5.74832 15.9383 5.49925 15.9383C5.25017 15.9383 5.0113 15.8394 4.83518 15.6633C4.65906 15.4872 4.56012 15.2483 4.56012 14.9992C4.56012 14.7501 4.65906 14.5113 4.83518 14.3352L13.2344 5.9375H7.37503C7.12639 5.9375 6.88793 5.83873 6.71211 5.66291C6.5363 5.4871 6.43753 5.24864 6.43753 5C6.43753 4.75136 6.5363 4.5129 6.71211 4.33709C6.88793 4.16127 7.12639 4.0625 7.37503 4.0625H15.5C15.7487 4.0625 15.9871 4.16127 16.1629 4.33709C16.3388 4.5129 16.4375 4.75136 16.4375 5Z"
              fill="white"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>

  <TheProductModal :product="selectedProduct" />
</template>
<script>
export default {
  data() {
    return {
      products: [],
      selectedProduct: {},

      breakPoints: {
        0: {
          itemsToShow: 1,
        },
        768: {
          itemsToShow: 2,
        },
        992: {
          itemsToShow: 3,
        },
        1100: {
          itemsToShow: 3,
        },
        1400: {
          itemsToShow: 4,
        },
        1800: {
          itemsToShow: 5,
        },
      },
    };
  },
  methods: {
    ViewProduct(prod) {
      this.selectedProduct = prod;
      openModal("productModal");
    },
    async GetProducts() {
      //const SPREADSHEET_ID = "1pHEYVEN6noxTO379AEIJiUFGxOJ1ujV_tJT46FKitQQ";
      const SPREADSHEET_ID = "1cfUow7-iV2oyO7Hhfo8OQe00qeGtqFjerSP4PG1jg0k";

      const { table } = await fetch(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json`,
      )
        .then((res) => res.text())
        .then((data) => JSON.parse(data.substring(47, data.length - 2)));
      const keys = productKeys();
      let list = table.rows.map((row) => {
        const values = keys.map((_, i) =>
          row.c[i] && row.c[i].v ? row.c[i].v : null,
        );

        const obj = {};
        keys.forEach((key, index) => {
          obj[key] = values[index];
        });

        return obj;
      });
      list = list.map((item) => {
        let finalImage = "/default-menu-item.webp";

        if (item.image && item.image.trim() !== "") {
          if (item.image.includes("drive.google.com")) {
            const fileId = item.image.split("/d/")[1]?.split("/")[0];
            if (fileId) {
              finalImage = `https://lh3.googleusercontent.com/u/0/d/${fileId}=s2000`;
            }
          } else {
            finalImage = item.image;
          }
        }

        return {
          ...item,
          category: item.category ?? "Altele",
          image: finalImage,
        };
      });
      this.products = list;
    },
  },
  created() {
    this.GetProducts();
  },
};
</script>
