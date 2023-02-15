<template>
  <HeaderBlock/>
  <router-view></router-view>
  <FooterBlock />
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock";
import FooterBlock from "@/components/FooterBlock";

export default {
  name: 'App',
  components: {
    HeaderBlock,
    FooterBlock
  },
  data() {
    return {
      cart: [],
    }
  },
  mounted() {
    //Проверяем, есть ли заполненая корзина в локал
    if (localStorage.cart) {
      this.$store.state.cart = JSON.parse(localStorage.cart);
    }
  },
  methods: {


    //Запись корзины в локал
    setLocal() {
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart));
    }
  },
  watch: {

  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 15px 0 15px;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  box-sizing: border-box;
}

a {
  color: #2c3e50;
  text-decoration: none;
  transition: 200ms;
}

a:hover {
  color: #41b883;
  transition: 200ms;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
