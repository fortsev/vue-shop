<template>
  <div>
    <h2>Главная страница</h2>
    <div class="container">
      <ProductList :products="product"/>
      <h3><router-link to="catalog">Смотреть все...</router-link></h3>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "HomePage",
  components: {
    ProductList,
  },
  data() {
    return {
      product: Array,
    }
  },
  mounted() {
    //Добавить обработку ошибок
    fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then(json=>this.product = json)
  },
}
</script>

<style scoped>
h3 {
  text-decoration: underline;
}
</style>