<script setup>
import ThePageHeaderWithImage_Gallery from "~/components/ThePageHeaderWithImage_Galerry.vue";
import bgImage from "@/assets/images/gallery-bg.webp";

const router = useRouter();
const currentRoute = router.currentRoute;
const config = useRuntimeConfig();
const fullUrl = `${config.public.domainURL}${currentRoute.value.fullPath}`;
useSeoMeta({
  title: "Galerie Popasul Caprei - Atmosferă și preparate tradiționale",
  description:
    "Vezi galeria foto a restaurantului Popasul Caprei din Bucovina și descoperă atmosfera caldă, preparatele tradiționale și ospitalitatea bucovineană.",
  keywords:
    "galerie Popasul Caprei, imagini restaurant, preparate tradiționale, atmosferă Bucovina",
  ogUrl: fullUrl,
  ogTitle: "Galerie Popasul Caprei - Atmosferă și preparate tradiționale",
  ogDescription:
    "Imagini din restaurantul Popasul Caprei din Bucovina: preparate tradiționale, decor autentic și ospitalitate locală.",
});
</script>
<template>
  <ThePageHeaderWithImage_Gallery
    title="Galerie"
    :bgImage="bgImage"
    description="Aici veți găsi liniște, bucate pregătite cu drag și atmosfera caldă a satului bucovinean."
  />

  <div class="container-lg mt-5 pt-4 px-3 px-sm-4 px-lg-0">
    <div class="row" v-if="imagesAreLoading">
      <div
        class="col-md-6 col-lg-4 mb-4"
        v-for="(img, index) in 3"
        :key="index"
      >
        <TheImageLoader :height="'479px'" />
      </div>
    </div>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"
      data-masonry='{"percentPosition": true }'
    >
      <div v-for="(img, index) in images" :key="index">
        <TheGalleryImage :bg-image="img" @loaded="() => {}" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [],
      imagesAreLoading: false,
    };
  },
  methods: {
    async GetImages() {
      this.imagesAreLoading = true;
      const SPREADSHEET_ID = "17zaPm9tLvW_m-hmeT7kweLjZukSVX8IfZ_J05hml2V4";

      const { table } = await fetch(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json`,
      )
        .then((res) => res.text())
        .then((data) => JSON.parse(data.substring(47, data.length - 2)));

      const keys = ["image"];
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

        return finalImage;
      });
      this.images = list;
      this.imagesAreLoading = false;
    },
  },
  created() {
    this.GetImages();
  },
};
</script>
