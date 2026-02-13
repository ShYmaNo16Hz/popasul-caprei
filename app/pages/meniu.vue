<script setup>
import bgImage from "@/assets/images/menu-bg.webp";

const router = useRouter();
const currentRoute = router.currentRoute;
const config = useRuntimeConfig();
const fullUrl = `${config.public.domainURL}${currentRoute.value.fullPath}`;
useSeoMeta({
  title: "Meniu Popasul Caprei - Bucate tradiționale din Bucovina",
  description:
    "Răsfoiește meniul restaurantului Popasul Caprei și alege dintre preparate tradiționale românești, gătite cu ingrediente locale din Bucovina.",
  keywords:
    "meniu Popasul Caprei, mâncare tradițională, bucate românești, restaurant Bucovina, preparate locale",
  ogUrl: fullUrl,
  ogTitle: "Meniu Popasul Caprei - Bucate tradiționale din Bucovina",
  ogDescription:
    "Preparate tradiționale cu gust autentic, gătite cu ingrediente locale. Vezi meniul complet al restaurantului Popasul Caprei.",
});
</script>
<template>
  <ThePageHeaderWithImage
    title="Meniu"
    :bgImage="bgImage"
    description="Preparate tradiționale, ingrediente locale și gusturi care amintesc de copilărie"
  />

  <ClientOnly>
    <div class="container-md mt-5 pt-4" v-if="productsLoaded">
      <div class="row">
        <div
          class="col-sm-6 col-lg-4 col-xxl-3 mb-4"
          v-for="(img, index) in 4"
          :key="index"
        >
          <TheImageLoader :height="'370px'" />
        </div>
      </div>
    </div>

    <template v-else>
      <div class="container-md mt-5 pt-4">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Ce ai poftă să mănânci?"
            v-model="searchText"
          />
          <span class="input-group-text" title="Caută">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              x="0"
              y="0"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 24 24"
              xml:space="preserve"
              class=""
            >
              <g>
                <path
                  d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
                  fill="#99805d"
                  opacity="1"
                  data-original="#000000"
                  class=""
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div
        class="container-md sticky-filters"
        :class="{ 'bg-scrolled': isScrolled }"
      >
        <div class="buttons-area mt-3 c-scroll">
          <div
            class="row justify-content-xl-between"
            :style="[rowButtonsWidth ? { width: `${rowButtonsWidth}px` } : '']"
          >
            <div
              class="col-auto mb-3"
              v-for="(category, index) in categories"
              :id="`btn-filter-${index}`"
            >
              <button
                type="button"
                class="btn"
                :class="[
                  selectedCategory === category
                    ? 'btn-primary-600'
                    : 'btn-neutral-800',
                ]"
                @click="SelectCategory(category)"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-md">
        <div class="row mt-3">
          <div
            class="col-sm-6 col-lg-4 col-xxl-3 mb-4"
            v-for="(prod, index) in filteredMenu"
          >
            <TheProductCard :product="prod" @view-product="ViewProduct" />
          </div>
        </div>
        <div class="text-center mt-5" v-if="!filteredMenu.length">
          <img src="@/assets/images/dish.png" alt="Dish not found" />
          <h4 class="mt-2">Produsul căutat nu există.</h4>
        </div>
      </div>
    </template>
  </ClientOnly>
  <TheProductModal :product="selectedProduct" />
</template>
<script>
const mainCategory = "Toate";

export default {
  data() {
    return {
      products: [],
      categories: [],
      selectedProduct: {},
      productsLoaded: false,
      selectedCategory: null,
      searchText: null,
      rowButtonsWidth: 0,
      isScrolled: false,
    };
  },
  computed: {
    filteredMenu() {
      let products = JSON.parse(JSON.stringify(this.products));
      if (this.selectedCategory !== mainCategory) {
        products = products.filter(
          (item) =>
            item.category.toLowerCase() === this.selectedCategory.toLowerCase()
        );
      }
      if (this.searchText) {
        this.selectedCategory = mainCategory;
        products = products.filter((item) =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
      return products;
    },
  },
  methods: {
    SelectCategory(category) {
      this.searchText = "";
      this.selectedCategory = category;
      if (window) window.scrollTo({ top: 403, behavior: "smooth" });
    },
    ViewProduct(prod) {
      this.selectedProduct = prod;
      openModal("productModal");
    },
    async GetProducts() {
      this.productsLoaded = true;
      const SPREADSHEET_ID = "1cfUow7-iV2oyO7Hhfo8OQe00qeGtqFjerSP4PG1jg0k";

      const { table } = await fetch(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json`
      )
        .then((res) => res.text())
        .then((data) => JSON.parse(data.substring(47, data.length - 2)));

      const keys = productKeys();
      console.log(table.rows);
      let list = table.rows.map((row) => {
        const values = keys.map((_, i) =>
          row.c[i] && row.c[i].v ? row.c[i].v : null
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

      //this.categories = Object.groupBy(list, ({ product }) => product);
      this.categories = [...new Set(list.map((item) => item.category))];

      this.categories.unshift(mainCategory);

      this.selectedCategory = this.categories[0];
      this.products = list;
      this.productsLoaded = false;

      this.$nextTick(() => {
        if (document && process.client) {
          const all = document.querySelectorAll('[id^="btn-filter"]');
          const spacing = 3;
          let total = 0;
          all.forEach((btn) => {
            total += btn.offsetWidth + spacing;
          });
          this.rowButtonsWidth = total;
        }
      });
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 400;
    },
  },
  created() {
    this.GetProducts();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
@media (max-width: 576px) {
  .sticky-filters {
    position: sticky;
    top: 95px;
    z-index: 2;
    padding: 10px 20px;
  }
  .bg-scrolled {
    background-color: var(--neutral-950);
  }
  .buttons-area {
    overflow-x: auto;
  }
}

@media (min-width: 576px) {
  .buttons-area .row {
    width: auto !important;
  }
}
</style>
