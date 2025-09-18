<template>
  <div class="content-wrapper">
    <div class="placeholder" :style="{ height: height }">
      <div class="animated-background" :style="{ height: height }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheImageLoader",
  props: {
    height: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.placeholder {
  margin: 0 auto;
  background-color: #eee;
  width: 100%;
  border-radius: 24px;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.animated-background {
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #eeeeee 8%, #cccccc 16%, #eeeeee 24%);

  background-size: 1200px 104px;
  position: relative;
  border-radius: 24px;
}
</style>
