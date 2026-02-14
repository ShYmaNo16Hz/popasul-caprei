<template>
  <img src="@/assets/images/footer-bg.webp" class="footer-bg" />
  <footer>
    <div class="container-lg">
      <div
        class="row align-items-center justify-content-center justify-content-lg-start"
      >
        <div class="col-auto">
          <a href="/">
            <img src="/logob-bigger.webp" alt=" Logo" class="footer-logo" />
          </a>
        </div>
        <div class="col-auto ms-3 mt-4 mt-sm-0">
          <div class="row align-items-center social-medias mb-2 pb-1">
            <div class="col-auto">
              <a
                :href="socialMedias().instagram"
                target="_blank"
                rel="noopener"
                class="me-4"
                title="Instagram"
              >
                <img src="@/assets/icons/instagram.svg" alt="Instagrm" />
              </a>
            </div>
            <div class="col-auto">
              <a
                :href="socialMedias().facebook"
                target="_blank"
                rel="noopener"
                class="me-4"
                title="Facebook"
              >
                <img src="@/assets/icons/facebook.svg" alt="Facebook" />
              </a>
            </div>
            <!-- <div class="col-auto">
              <a
                :href="socialMedias().tiktok"
                target="_blank"
                rel="noopener"
                class="me-4"
                title="Tik Tok"
              >
                <img src="@/assets/icons/tik-tok.svg" alt="Tik Tok" />
              </a>
            </div>
            <div class="col-auto">
              <a
                :href="socialMedias().youtube"
                target="_blank"
                rel="noopener"
                title="YouTube"
              >
                <img src="@/assets/icons/youtube.svg" alt="YouTube" />
              </a>
            </div> -->
          </div>
          <div class="paragraph text-neutral-500">
            Copyright © Popasul Caprei, {{ new Date().getFullYear() }}
          </div>
        </div>
        <div class="col-lg my-3 my-lg-0"></div>
        <div class="col-auto">
          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm"
            target="_blank"
            rel="noopener"
          >
            <img src="/ec.europa.eu.webp" />
          </a>
        </div>

        <div class="col-auto">
          <a href="https://anpc.ro/" target="_blank" rel="noopener">
            <img src="/anpc.webp" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.social-medias a img {
  filter: brightness(0) saturate(100%) invert(71%) sepia(24%) saturate(215%)
    hue-rotate(180deg) brightness(93%) contrast(91%);
  transition: 0.2s;
}
.social-medias a img:hover {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(3202%)
    hue-rotate(50deg) brightness(124%) contrast(106%);
}

footer {
  padding: 24px 0px;
  background-color: var(--neutral-950);
  color: var(--neutral-200);
  font-family: Montserrat;
  font-weight: 400;
  font-size: 13px;
  line-height: 125%;
}

b {
  color: white;
}

.footer-bg {
  width: 100%;
  margin-top: 100px;
}
</style>
