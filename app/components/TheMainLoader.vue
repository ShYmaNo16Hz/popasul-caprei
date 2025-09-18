<script setup>
const isLoading = useState("globalLoader", () => false);
</script>
<template>
  <div v-if="isLoading" class="page-loader-background"></div>
  <div v-if="isLoading" class="page-loader-middle">
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.page-loader-middle {
  z-index: 1501;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.page-loader-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #00000094;
  top: 0;
  left: 0;
  z-index: 1500;
}

.loader {
  width: 40px;
  height: 20px;
  --c: no-repeat radial-gradient(farthest-side, #fff 93%, #0000);
  background: red 0 0, red 50% 0;
  background-size: 8px 8px;
  position: relative;
  clip-path: inset(-200% -100% 0 0);
  animation: l6-0 1.5s linear infinite;
}

.loader:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 12px;
  background: #4b80b0;
  left: -16px;
  top: 0;
  animation: l6-1 1.5s linear infinite,
    l6-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
}

.loader:after {
  content: "";
  position: absolute;
  inset: 0 0 auto auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffffff;
  animation: l6-3 1.5s linear infinite;
}

@keyframes l6-0 {
  0%,
  30% {
    background-position: 0 0, 50% 0;
  }

  33% {
    background-position: 0 100%, 50% 0;
  }

  41%,
  63% {
    background-position: 0 0, 50% 0;
  }

  66% {
    background-position: 0 0, 50% 100%;
  }

  74%,
  100% {
    background-position: 0 0, 50% 0;
  }
}

@keyframes l6-1 {
  90% {
    transform: translateY(0);
  }

  95% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(15px);
    left: calc(100% - 8px);
  }
}

@keyframes l6-2 {
  100% {
    top: -0.1px;
  }
}

@keyframes l6-3 {
  0%,
  80%,
  100% {
    transform: translate(0);
  }

  90% {
    transform: translate(26px);
  }
}
</style>
