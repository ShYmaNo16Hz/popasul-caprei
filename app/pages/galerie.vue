<script setup>
import bgImage from "@/assets/images/gallery-bg.webp";

import img_1 from "@/assets/images/gallery/1.webp";
import img_2 from "@/assets/images/gallery/2.webp";
import img_3 from "@/assets/images/gallery/3.webp";
import img_4 from "@/assets/images/gallery/3.webp";
import img_5 from "@/assets/images/gallery/1.webp";
import img_6 from "@/assets/images/gallery/2.webp";
import img_7 from "@/assets/images/gallery/3.webp";

//import { onMounted } from "vue";

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];

const countImagesLoad = ref(0);
const handleImageLoaded = () => {
  countImagesLoad.value++;
};

// onMounted(async () => {
//   if (process.client) {
//     const Masonry = (await import("masonry-layout")).default;

//     new Masonry(".masonry-grid", {
//       itemSelector: ".masonry-item",
//       percentPosition: true,
//       gutter: 16,
//     });
//   }
// });
</script>
<template>
  <ThePageHeaderWithImage
    title="Galerie"
    :bgImage="bgImage"
    description="Aici veți găsi liniște, bucate pregătite cu drag și atmosfera caldă a satului bucovinean."
  />

  <div class="container-lg mt-5 pt-4 px-3 px-sm-4 px-lg-0">
    <div class="row" v-if="countImagesLoad < 4">
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
        <TheGalleryImage :bg-image="img" @loaded="handleImageLoaded" />
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
    };
  },
  methods: {},
  created() {},
};
</script>
