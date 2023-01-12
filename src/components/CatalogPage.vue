<template>
  <div class="home-page">
    <h2>Каталог товаров</h2>
    <div class="container" v-if="product.length !== 0">
      <CategoryMenu
          :category="category"
          :activeCategory="activeCategory"
          @choosingCategory="(name) => activeCategory = name"
      />
      <ProductList :products="sortProduct"/>
    </div>
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu";
import ProductList from "@/components/ProductList";

export default {
  name: "HomePage",
  components: {
    CategoryMenu,
    ProductList
  },
  data() {
    return {
      activeCategory: '',
      product: Array,
      category: Array,
    }
  },
  props: {

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
  computed: {
    sortProduct() {
      if (this.activeCategory !== '') {
        return this.product.filter((item) => item.category === this.activeCategory);
      }
      return this.product;
    }
  }
}
</script>

<style scoped>
.home-page .container {
  padding: 40px 0;
}
</style>