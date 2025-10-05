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
    <div class="description mb-5 pb-3">
      Popasul Caprei este un popas cu tradiție în Bucovina, condus de o familie
      care a reinventat ideea de ospitalitate autentică, îmbinând tradiția
      locală cu rafinamentul modern. Povestea locului a început din pasiunea
      membrilor familiei de a crea un spațiu diferit, unde fiecare detaliu să
      reflecte grija pentru client, frumusețea Bucovinei și dorința de a oferi o
      experiență memorabilă.
    </div>

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
        <h1 class="fw-semibold text-white text-uppercase mb-4">
          Povestea Popasului Caprei
        </h1>
        <p class="paragraph">
          Popasul Caprei a luat naștere dintr-o viziune familială unică: să
          realizeze mai mult decât un simplu popas rutier. Familia care
          administrează locul a fost mereu motivată să facă lucrurile "altfel",
          să aducă laolaltă valorile Bucovinei cu beneficiile confortului
          actual. Ospitalitatea este profund personalizată, iar atmosfera
          reflectă respectul pentru tradiții, dar și deschiderea către inovație.
          De aceea, meniul și decorul Popasului Caprei combină motive bucovinene
          autentice cu elemente moderne, conturând o identitate distinctă.
        </p>
      </div>
    </div>
    <div class="row align-items-center mb-5 pb-5">
      <div class="col">
        <h1 class="fw-semibold text-white text-uppercase mb-4">
          Tradiție și Modernitate
        </h1>
        <p class="paragraph">
          Ceea ce distinge Popasul Caprei este tocmai această împletire a
          trecutului cu prezentul. Bucatele pregătite aici poartă gustul
          copilăriei, dar și prospețimea preparatelor contemporane, iar spațiul
          reunește frumusețea artizanală a zonei cu facilități moderne. Locul
          atrage atât călătorii în trecere, cât și turiștii care caută o
          experiență locală autentică și servicii ireproșabile.
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
        <h1 class="fw-semibold text-white text-uppercase mb-4">
          Experiența Familială Bucovineană
        </h1>
        <p class="paragraph">
          La Popasul Caprei, fiecare vizită este o poveste familială, iar
          fiecare client devine parte din această poveste. Dorința permanentă de
          a face totul mai frumos și mai bine se transmite prin calitatea
          serviciilor, atenția la detalii, meniul variat și atmosfera caldă.
          Astfel, popasul a ajuns să fie un reper gastronomic și cultural pentru
          zona Bucovina, evidențiat pozitiv în recenzii și recomandat atât
          localnicilor, cât și turiștilor.
        </p>
      </div>
    </div>
    <div class="description mb-5 pb-3">
      Popasul Caprei nu este doar un popas cu tradiție și suflet bucovinean, ci
      și locul unde poți savura cea mai bună pizza din toată Bucovina. Inspirată
      din pasiunea familiei pentru gusturi autentice și inovare, pizza de aici a
      devenit un reper pentru cei care își doresc o experiență culinară
      memorabilă. Rețetele unice, ingredientele atent selecționate și modul de
      preparare fac ca fiecare felie să merite încercată, indiferent dacă ești
      localnic sau călător prin zonă. Vino să descoperi combinația perfectă
      între tradiție, modern și gust desăvârșit!
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
.description {
  font-family: Inter;
  font-weight: 400;
  font-size: clamp(14px, 3vw, 24px);
  color: var(--neutral-200);
}

.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  max-height: clamp(240px, 40vw, 500px);
}
</style>
