<template>
  <div>
    <h2>Главная страница</h2>
    <div class="container" v-if="product.length > 3">
      <ProductList :products="product"/>
      <h3><router-link to="catalog">Смотреть все...</router-link></h3>
    </div>
    <PreLoader v-else/>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import PreLoader from "@/components/PreLoader";

export default {
  name: "HomePage",
  components: {
    ProductList,
    PreLoader
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