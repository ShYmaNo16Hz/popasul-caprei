<script setup>
import bgImage from "@/assets/images/gallery-bg.webp";

const router = useRouter();
const currentRoute = router.currentRoute;
const config = useRuntimeConfig();
const fullUrl = `${config.public.domainURL}${currentRoute.value.fullPath}`;
useSeoMeta({
  title: "Despre Popasul Caprei - Restaurant tradițional din Bucovina",
  description:
    "Află povestea restaurantului Popasul Caprei din Bucovina, locul unde tradiția, ospitalitatea și ingredientele locale dau viață preparatelor cu gust autentic.",
  keywords:
    "despre Popasul Caprei, restaurant tradițional Bucovina, povestea restaurantului, preparate cu gust autentic",
  ogUrl: fullUrl,
  ogTitle: "Despre Popasul Caprei - Restaurant tradițional din Bucovina",
  ogDescription:
    "Popasul Caprei din Bucovina oferă o experiență autentică prin preparate tradiționale și ingrediente locale.",
});
</script>
<template>
  <ThePageHeaderWithImage
    title="Despre noi"
    :bgImage="bgImage"
    description="Aici veți găsi liniște, bucate pregătite cu drag și atmosfera caldă a satului bucovinean."
  />

  <div class="container-lg mt-5 pt-4 px-3 px-sm-4 px-lg-0">
    <div class="row align-items-center mb-5 pb-5">
      <div class="col-xl-5 mt-4 mt-xl-0 order-1 order-xl-0">
        <img
          src="@/assets/images/about-us/1.webp"
          alt="About Us Image"
          class="about-img"
        />
      </div>
      <div class="col-1 d-none d-xl-block"></div>
      <div class="col">
        <h1 class="fw-semibold text-white text-uppercase mb-4">Despre noi</h1>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          volutpat est, rhoncus tincidunt mi facilisis imperdiet. Sed id est ac
          urna vulputate dignissim varius consequat diam. Proin vel felis
          dictum, feugiat purus vel, sollicitudin felis. Cras sollicitudin
          placerat dignissim. Pellentesque nec volutpat quam. Donec laoreet
          libero leo, accumsan cursus mi varius ac. Proin ex lectus, cursus
          feugiat laoreet vel, egestas et enim. Nam ac ex varius, venenatis
          risus a, lobortis ligula. Mauris quam quam, vestibulum in elit at,
          elementum commodo orci.
        </p>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          volutpat est, rhoncus tincidunt mi facilisis imperdiet. Sed id est ac
          urna vulputate dignissim varius consequat diam. Proin vel felis
          dictum, feugiat purus vel, sollicitudin felis. Cras sollicitudin
          placerat dignissim. Pellentesque nec volutpat quam. Donec laoreet
          libero leo, accumsan cursus mi varius ac. Proin ex lectus, cursus
          feugiat laoreet vel, egestas et enim. Nam ac ex varius, venenatis
          risus a, lobortis ligula. Mauris quam quam, vestibulum in elit at,
          elementum commodo orci.
        </p>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <h1 class="fw-semibold text-white text-uppercase mb-4">Despre noi</h1>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          volutpat est, rhoncus tincidunt mi facilisis imperdiet. Sed id est ac
          urna vulputate dignissim varius consequat diam. Proin vel felis
          dictum, feugiat purus vel, sollicitudin felis. Cras sollicitudin
          placerat dignissim. Pellentesque nec volutpat quam. Donec laoreet
          libero leo, accumsan cursus mi varius ac. Proin ex lectus, cursus
          feugiat laoreet vel, egestas et enim. Nam ac ex varius, venenatis
          risus a, lobortis ligula. Mauris quam quam, vestibulum in elit at,
          elementum commodo orci.
        </p>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          volutpat est, rhoncus tincidunt mi facilisis imperdiet. Sed id est ac
          urna vulputate dignissim varius consequat diam. Proin vel felis
          dictum, feugiat purus vel, sollicitudin felis. Cras sollicitudin
          placerat dignissim. Pellentesque nec volutpat quam. Donec laoreet
          libero leo, accumsan cursus mi varius ac. Proin ex lectus, cursus
          feugiat laoreet vel, egestas et enim. Nam ac ex varius, venenatis
          risus a, lobortis ligula. Mauris quam quam, vestibulum in elit at,
          elementum commodo orci.
        </p>
      </div>
      <div class="col-1 d-none d-xl-block"></div>
      <div class="col-xl-5">
        <img
          src="@/assets/images/about-us/2.webp"
          alt="About Us Image"
          class="about-img"
        />
      </div>
    </div>
  </div>
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
.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  max-height: clamp(240px, 40vw, 500px);
}
</style>
