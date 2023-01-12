<template>
  <div>
    <router-link :to="{ name: 'catalog' }"
    class="back-link">В каталог</router-link>
    <h2>{{ product.title }}</h2>
    <div class="container">
      <div class="card" v-if="product.id !== undefined">
        <img class="image" :src="product.image" alt="product.title">
        <div class="param">
          <p>Категория: {{ product.category }}</p>
          <p>Рейтинг: {{ product.rating.rate }}</p>
          <p><b>Цена:</b> {{ product.price }}$</p>
        </div>
        <h3>Описание</h3>
        <p>{{ product.description }}</p>
        <span class="btn">Купить</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      product: Object,
    }
  },
  mounted() {
    fetch('https://fakestoreapi.com/products/' + this.$route.params.id)
        .then(res=>res.json())
        .then(json=>this.product = json)
  }
}
</script>

<style scoped>
.btn {
  width: 150px;
  height: 30px;
  background-color: #41b883;
  border: 1px solid #41b883;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0 auto;
  transition: 200ms;
}

.btn:hover {
  background-color: #fff;
  color: #41b883;
  transition: 200ms;
}

.back-link {
  text-decoration: underline;
}

.card {
  padding: 40px 20px;
  background-color: #fff;
  border: 1px solid #2c3e501f;
  border-radius: 10px;
}

.image {
  max-height: 350px;
}
</style>