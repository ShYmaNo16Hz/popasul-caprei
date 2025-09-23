<template>
  <header>
    <nav id="app-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <a href="/">
              <img src="/logo.webp" alt="Logo" class="logo d-none d-xl-block" />
              <img src="/logo-mobile.webp" alt="Logo" class="logo d-xl-none" />
            </a>
          </div>
          <div class="col-auto mt-2 pe-5 d-none d-xl-block">
            <ul class="menu-pages">
              <li>
                <NuxtLink to="/">Acasă</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/meniu">Meniu</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/galerie">Galerie</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/despre-noi">Despre noi</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-auto mt-2 social-medias ps-5 d-none d-md-block">
            <a
              :href="socialMedias().instagram"
              target="_blank"
              rel="noopener"
              class="me-4"
              title="Instagram"
            >
              <img src="@/assets/icons/instagram.svg" alt="Instagrm" />
            </a>
            <a
              :href="socialMedias().facebook"
              target="_blank"
              rel="noopener"
              class="me-4"
              title="Facebook"
            >
              <img src="@/assets/icons/facebook.svg" alt="Facebook" />
            </a>
            <a
              :href="socialMedias().tiktok"
              target="_blank"
              rel="noopener"
              class="me-4"
              title="Tik Tok"
            >
              <img src="@/assets/icons/tik-tok.svg" alt="Tik Tok" />
            </a>
            <a
              :href="socialMedias().youtube"
              target="_blank"
              rel="noopener"
              title="YouTube"
            >
              <img src="@/assets/icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
          <div class="col-auto mt-2 d-sm-none">
            <div
              class="hamburger-menu"
              @click="menuOpen = !menuOpen"
              :class="{ 'hamburger-open': menuOpen }"
            >
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="bigger-menu d-xl-none" v-if="menuOpen" id="bigger-menu">
      <ul class="menu-pages">
        <li>
          <NuxtLink to="/">Acasă</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/meniu">Meniu</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/galerie">Galerie</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/despre-noi">Despre noi</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      navbar: {},
      menuOpen: false,
    };
  },
  methods: {
    ToggleNavbarBg() {
      let navbar = document.getElementById("app-header");
      if (navbar) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navbar.classList.add("menu-bg-on-scroll");
        } else {
          navbar.classList.remove("menu-bg-on-scroll");
        }
      }
    },
  },
  watch: {
    $route: {
      handler() {
        this.menuOpen = false;
      },
      immediate: true,
    },
    menuOpen: {
      handler(value) {
        if (!document) return;
        let scrollBtn = document.getElementById("scroll-up-btn");
        if (!scrollBtn) return;
        if (value) scrollBtn.classList.add("d-none");
        else scrollBtn.classList.remove("d-none");
      },
      immediate: true,
    },
  },
  mounted() {
    if (!window) return;
    window.addEventListener("scroll", this.ToggleNavbarBg);
  },
  unmounted() {
    if (!window) return;
    window.removeEventListener("scroll", this.ToggleNavbarBg);
  },
};
</script>

<style scoped>
.social-medias {
  border-left: 1px solid var(--neutral-700);
}
.social-medias img {
  filter: brightness(0) saturate(100%) invert(42%) sepia(0%) saturate(6%)
    hue-rotate(205deg) brightness(97%) contrast(90%);
  transition: 0.2s;
}
.social-medias img:hover {
  filter: brightness(0) saturate(100%) invert(61%) sepia(0%) saturate(3706%)
    hue-rotate(114deg) brightness(104%) contrast(65%);
}

.menu-pages {
  list-style-type: none;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  padding: 0px;
}

.menu-pages > li {
  margin-bottom: 0px;
}
.menu-pages > li a {
  font-weight: 400;
  font-size: 16px;
  color: var(--neutral-300);
  font-family: Montserrat;
}
.menu-pages > li span {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  color: var(--neutral-600);
  cursor: pointer;
}

.menu-pages > li:not(:last-child) {
  margin-right: 21px;
}

@media (max-width: 1200px) {
  .logo {
    max-width: 70px !important;
  }
}
/*
@media (max-width: 576px) {
  .logo {
    max-width: 80px !important;
  }
} */

@media (min-width: 1200px) {
  .menu-pages > li:not(:last-child) {
    margin-right: 28px;
  }
}

header {
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
}

nav {
  overflow: hidden;
  padding: 18px 0px;
  position: relative;
  background-color: var(--neutral-950);
  height: 100px;
  box-shadow: 0px 20px 40px 0px #00000033;
}
nav::after {
  position: absolute;
  top: 0px;
  right: 0;
  left: 0;
  content: " ";
  background-image: url("/assets/images/menu/top-lines.webp");
  background-repeat: repeat-x;
  width: 100%;
  height: 100%;
}

nav > .container {
  z-index: 1;
  position: relative;
}

@media only screen and (min-width: 576px) {
  nav {
    padding-left: 27px;
    padding-right: 27px;
  }
}

.menu-pages .router-link-exact-active {
  font-weight: 600;
  position: relative;
  color: white;
}

.bigger-menu {
  height: calc(100vh - 55px);
  background: var(--neutral-950);
  backdrop-filter: blur(60px);
  width: 100%;
  position: fixed;
  top: 99px;
  padding-top: 40px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bigger-menu .menu-pages {
  display: block;
}
.bigger-menu .menu-pages > li {
  margin-bottom: 40px;
  margin-right: 0px;
  text-align: center;
}

.bigger-menu .menu-pages > li > a {
  padding: 4px 10px;
}
.bigger-menu .menu-pages .dropdown {
  padding: 4px 10px;
}

/*#region burgir*/
.hamburger-menu {
  width: 30px;
  cursor: pointer;
}
.hamburger-menu:before,
.hamburger-menu:after,
.hamburger-menu div {
  background: var(--neutral-100);
  content: "";
  display: block;
  height: 4px;
  border-radius: 2px;
  margin: 5px 0;
  transition: 0.5s;
}
.hamburger-menu.hamburger-open:before {
  transform: translateY(9px) rotate(134deg);
}
.hamburger-menu.hamburger-open:after {
  transform: translateY(-9px) rotate(-134deg);
}
.hamburger-menu.hamburger-open div {
  transform: scale(0);
}
/*#endregion*/
</style>
