<template>
  <HeaderBlock
      :cart="cart"
      @changeCount="changeCount"
  />
  <router-view
      @add="add"
  ></router-view>
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
    if (localStorage.cart) {
      this.cart = JSON.parse(localStorage.cart);
    }
  },
  methods: {
    add(product) {
      let indexProduct = this.cart.findIndex((item) => item.id === product.id);
      if (indexProduct === -1) {
        this.cart.push({...product, count: 1})
      } else {
        ++this.cart[indexProduct].count
      }
      this.setLocal()
    },
    changeCount(data){
      let product = this.cart.find((item) => item.id === data.id)
      let productIndex = this.cart.findIndex((item) => item.id === data.id)
      if (data.count === -1) {
        --product.count
        if (product.count === 0) {
          this.cart.splice(productIndex, 1);
        }
      } else {
        ++product.count
      }
      this.setLocal()
    },
    setLocal() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
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
