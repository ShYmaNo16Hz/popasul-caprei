<template>
  <div class="iframe-area">
    <iframe
      class="gmap_iframe"
      width="100%"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      :src="`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=17&output=embed`"
    ></iframe>

    <div class="btn-position">
      <button
        type="button"
        class="btn btn-light-brown d-inline-flex align-items-center"
        @click="GoToGoogleMaps()"
      >
        <span class="me-2"> Indicații </span>
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
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      latitude: 47.4655776,
      longitude: 25.7671967,
    };
  },
  methods: {
    GoToGoogleMaps() {
      const googleMapUrl = `https://www.google.com/maps/place/Popasul+Caprei/@47.4655812,25.7646218,17z/data=!3m1!4b1!4m6!3m5!1s0x4735a1bfd5f5c583:0xc233afa7346f71fc!8m2!3d47.4655776!4d25.7671967!16s%2Fg%2F11j1brpp10?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
      window.open(googleMapUrl, "_blank");
    },
  },
};
</script>
<style scoped>
.iframe-area {
  margin-top: -40px;
  position: relative;
}
iframe {
  height: 490px;
}

.btn-position {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 20px;
  display: flex;
  justify-content: center;
}
.btn-position .btn {
}
</style>
