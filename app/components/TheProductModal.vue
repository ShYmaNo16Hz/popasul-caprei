<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-md modal-fullscreen-md-down"
    >
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <img class="product-img" :src="product.image" alt="Product image" />
            <div />
            <div class="badge badge-neutral-800 mt-3">
              {{ product.category }}
            </div>
          </div>

          <div class="row align-items-center mt-5">
            <div class="col">
              <h5 class="semibold">
                {{ product.name }}
              </h5>
            </div>
            <div class="col-auto">
              <h4 class="text-white">
                {{ product.price }}
              </h4>
            </div>
          </div>

          <div class="line"></div>

          <div class="description">
            {{ product.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
      default: {
        name: "",
        price: "",
        description: "",
        image: "",
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.product-img {
  height: 210px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}
h5 {
  color: var(--primary-400);
}

.line {
  height: 4px;
  width: 100px;
  background-color: var(--primary-800);
  margin: 40px auto;
}

.description {
  color: var(--neutral-300);
  line-height: 25px;
}
</style>
