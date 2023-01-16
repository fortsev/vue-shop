<template>
  <div class="home-page">
    <h2>Каталог товаров</h2>
    <div class="container" v-if="product.length > 1">
      <CategoryMenu
          :category="category"
          :activeCategory="activeCategory"
          @choosingCategory="(name) => activeCategory = name"
      />
      <ProductList
          :products="sortProduct"
          @add="add"
      />
    </div>
    <PreLoader v-else/>
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu";
import ProductList from "@/components/ProductList";
import PreLoader from "@/components/PreLoader";

export default {
  name: "HomePage",
  components: {
    CategoryMenu,
    ProductList,
    PreLoader
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
    //Запрос на получение всех товаров
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.product = json)
        .catch(err=>console.log(err.message))
    //Запрос на получение всех категорий
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>this.category = json)
        .catch(err=>console.log(err.message))
  },
  methods: {
    //Добавление товара в корзину
    add(data) {
      this.$emit('add', data);
    }
  },
  computed: {
    //Сортировка продуктов по выбранной категории
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