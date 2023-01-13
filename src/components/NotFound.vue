<template>
  <div>
    <h2>Упс! Тут ничего нет...</h2>
    <router-link :to="{name: 'home'}">На главную</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>