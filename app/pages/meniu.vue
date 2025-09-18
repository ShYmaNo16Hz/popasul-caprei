<script setup>
import bgImage from "@/assets/images/menu-bg.webp";
</script>
<template>
  <ThePageHeaderWithImage
    title="Meniu"
    :bgImage="bgImage"
    description="Preparate tradiționale, ingrediente locale și gusturi care amintesc de copilărie"
  />

  <div class="container-md mt-5 pt-4">
    <div class="row" v-if="productsLoaded">
      <div
        class="col-sm-6 col-lg-4 col-xxl-3 mb-4"
        v-for="(img, index) in 4"
        :key="index"
      >
        <TheImageLoader :height="'370px'" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-sm-6 col-lg-4 col-xxl-3 mb-4"
        v-for="(prod, index) in products"
      >
        <TheProductCard :product="prod" @view-product="ViewProduct" />
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
      productsLoaded: false,
    };
  },
  methods: {
    ViewProduct(prod) {
      this.selectedProduct = prod;
      openModal("productModal");
    },
    async Test() {
      this.productsLoaded = true;
      const SPREADSHEET_ID = "1pHEYVEN6noxTO379AEIJiUFGxOJ1ujV_tJT46FKitQQ";

      const { table } = await fetch(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json`
      )
        .then((res) => res.text())
        .then((data) => JSON.parse(data.substring(47, data.length - 2)));

      let list = table.rows.map((row) => row["c"].filter((row) => row));
      list = list
        .map((item) => item.filter((val) => val["v"] && val["v"] !== " "))
        .filter((item) => item.length);

      const keys = ["name", "price", "description", "image"];
      list = list.map((smallList) => {
        const values = smallList.map((val) => val["v"]);
        const obj = {};
        keys.forEach((key, index) => {
          obj[key] = values[index];
        });
        return obj;
      });
      this.products = list;
      this.productsLoaded = false;
    },
  },
  created() {
    this.Test();
  },
};
</script>
