<template>
  <div class="card" @click="ViewProduct()">
    <div class="card-body">
      <div class="card-content">
        <NuxtImg :src="productImage" alt="Product image" class="mb-3" />
        <div class="badge badge-neutral-800 mb-3">
          {{ product.category }}
        </div>
        <h5 class="semibold">
          {{ product.name }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
// 1. Import your default image here

export default {
  emits: ["view-product"],
  props: {
    product: {
      required: true,
      type: Object,
      default: () => ({
        name: "",
        price: "",
        description: "",
        image: "",
      }),
    },
  },
  computed: {
    productImage() {
      return this.product.image || "/default-menu-item.webp";
    },
  },
  methods: {
    ViewProduct() {
      this.$emit("view-product", this.product);
    },
  },
};
</script>
<style scoped>
.card {
  background-color: var(--neutral-900);
  border: 1px solid var(--neutral-800);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.card:hover {
  border: 1px solid var(--primary-600);
  background-color: #1d222c;
}
.card::after {
  position: absolute;
  right: 0;
  left: 0;
  content: " ";
  background-image: url("/assets/images/prod-card-bg.webp");
  background-repeat: repeat-x;
  width: 100%;
  height: 100%;
}
.card-body {
  padding: 24px;
}
.card-content {
  position: relative;
  z-index: 1;
}
h5 {
  color: var(--primary-400);
  height: 54px;
  overflow: hidden;
}

.card-content img {
  height: 210px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}
</style>
