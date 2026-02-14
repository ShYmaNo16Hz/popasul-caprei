<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["loaded"]);

const props = defineProps({
  bgImage: {
    type: String,
    required: true,
  },
});

const isLoading = ref(true);
const onImageLoad = () => {
  isLoading.value = false;
  emit("loaded");
};
const onImageError = () => {
  isLoading.value = false;
};
</script>

<template>
  <ClientOnly>
    <div class="card-image">
      <div v-if="isLoading" class="spinner-overlay">
        <div class="spinner" />
      </div>
      <img
        :src="bgImage"
        loading="lazy"
        @load="onImageLoad"
        @error="onImageError"
        :style="{
          opacity: !isLoading ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }"
      />
    </div>
  </ClientOnly>
</template>

<style scoped>
.card-image {
  position: relative;
  height: clamp(250px, 40vw, 420px);
  border-radius: 12px;
  overflow: hidden;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.spinner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
