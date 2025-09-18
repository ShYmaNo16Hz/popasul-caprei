<!--
https://docs.google.com/spreadsheets/d/1pHEYVEN6noxTO379AEIJiUFGxOJ1ujV_tJT46FKitQQ/edit?gid=0#gid=0
-->
<template>
  <section class="hero">
    <nuxt-img src="/home-bg-img.webp" class="hero-img" />
    <div class="hero-bottom-area">
      <div class="hero-bottom-content px-3 px-sm-0">
        <h1>Popasul Caprei</h1>
        <h2 class="text-center mt-3">Tradiție și natură în inima Bucovinei</h2>
      </div>
    </div>
    <img
      src="@/assets/images/home-header-bottom-bg.webp"
      class="hero-bottom-img"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.hero {
  height: clamp(60vh, 53vw, 950px);
  max-height: 950px;
  position: relative;
}
.hero-img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.hero-bottom-img {
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -135px;
  width: 100%;
  object-fit: cover;
}

h1 {
  font-family: Montserrat;
  font-size: clamp(45px, 10vw, 96px);
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}

.hero-bottom-area {
  position: absolute;
  background: linear-gradient(180deg, rgb(10 12 15 / 0%) 30%, #0a0c0f 100%);
  height: 90%;
  bottom: 0;
  width: 100%;
}
.hero-bottom-content {
  max-width: 1325px;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  padding-bottom: 130px;
}
@media only screen and (min-width: 768px) {
  .hero-bottom-content .custom-width {
    width: 330px;
  }
}
</style>
