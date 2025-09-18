<template>
  <div class="card">
    <div class="card-body">
      <div class="row align-items-center">
        <div
          class="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start ps-2 ps-xl-5"
        >
          <div class="section-title">
            Loc de popas, <br />suflet de Bucovina
          </div>
          <p class="paragraph mt-4 mb-5">
            Popasul Caprei este mai mult decât un loc de odihnă – este o
            invitație la tradiție, natură și gusturi autentice. Aici veți găsi
            liniște, bucate pregătite cu drag și atmosfera caldă a satului
            bucovinean.
          </p>
          <NuxtLink
            to="/galerie"
            class="btn btn-light-brown d-inline-flex align-items-center"
          >
            <span class="me-2">Galerie</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4375 5V13.125C16.4375 13.3736 16.3388 13.6121 16.1629 13.7879C15.9871 13.9637 15.7487 14.0625 15.5 14.0625C15.2514 14.0625 15.0129 13.9637 14.8371 13.7879C14.6613 13.6121 14.5625 13.3736 14.5625 13.125V7.26562L6.16331 15.6633C5.98719 15.8394 5.74832 15.9383 5.49925 15.9383C5.25017 15.9383 5.0113 15.8394 4.83518 15.6633C4.65906 15.4872 4.56012 15.2483 4.56012 14.9992C4.56012 14.7501 4.65906 14.5113 4.83518 14.3352L13.2344 5.9375H7.37503C7.12639 5.9375 6.88793 5.83873 6.71211 5.66291C6.5363 5.4871 6.43753 5.24864 6.43753 5C6.43753 4.75136 6.5363 4.5129 6.71211 4.33709C6.88793 4.16127 7.12639 4.0625 7.37503 4.0625H15.5C15.7487 4.0625 15.9871 4.16127 16.1629 4.33709C16.3388 4.5129 16.4375 4.75136 16.4375 5Z"
                fill="white"
              />
            </svg>
          </NuxtLink>
        </div>
        <div class="col">
          <img src="@/assets/images/loc-card-img.webp" class="location-img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.card {
  border: 1px solid var(--neutral-800);
  background: linear-gradient(
    180deg,
    rgba(20, 24, 31, 0.6) 49.52%,
    #0a0c0f 100%
  );
  border-radius: 24px;
  box-shadow: 12px 24px 60px 0px #50607c29;
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 1;
}
.card-body {
  padding: 20px 20px 20px 20px;
}

.paragraph {
  color: var(--neutral-300);
}

.location-img {
  height: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (min-width: 992px) {
  .location-img {
    height: 100%;
  }
}
</style>
