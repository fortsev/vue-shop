<template>
  <div class="preloader">
    <h3>Идет загрузка...</h3>
  </div>
</template>

<script>
export default {
  name: "PreLoader"
}
</script>

<style scoped>
.preloader {
  animation: preloader-anim 2s infinite linear;
}

@keyframes preloader-anim {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>