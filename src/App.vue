<template>
  <HeaderBlock />
  <HomePage
      :product="product"
      :category="category"
  />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock";
import HomePage from "@/components/HomePage";
import FooterBlock from "@/components/FooterBlock";

export default {
  name: 'App',
  components: {
    HeaderBlock,
    HomePage,
    FooterBlock
  },
  data() {
    return {
      product: Array,
      category: Array,
    }
  },
  mounted() {
    //Добавить обработку ошибок
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.product = json)
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>this.category = json)
  },
  methods: {

  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
  background-color: #F9F9F9;
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
