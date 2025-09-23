<template>
  <section class="hero" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="hero-gradient"></div>
    <div class="hero-content">
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="description px-4 px-sm-0">
        {{ description }}
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    bgImage: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.hero {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: clamp(360px, 45vw, 550px);
  position: relative;
  padding-top: 1px;
}
.hero-gradient {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(10, 12, 15, 0.4) 0%, #14181f 100%);
}
.hero-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  z-index: 1;
  color: white;
  position: relative;
  padding-bottom: 50px;
}
.description {
  font-family: Inter;
  font-weight: 400;
  font-size: clamp(14px, 3vw, 24px);
  color: var(--neutral-200);
  max-width: 600px;
  text-align: center;
}

h1 {
  font-family: Montserrat;
  font-size: clamp(24px, 9vw, 96px);
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}
</style>
