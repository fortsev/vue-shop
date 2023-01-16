<template>
  <div class="list">
    <transition-group name="fade">
    <div class="item" v-for="(item) in products" :key="item.id">
      <div class="image">
        <img :src="item.image" :alt="item.title">
      </div>
      <div class="title">
        <router-link :to="{ name: 'product', params: {id: item.id} }">
          {{ item.title }}
        </router-link>
      </div>
      <div class="price">
        {{ item.price }} $
      </div>
      <span class="btn" @click="addCart(item)">Купить</span>
    </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array,
  },
  mounted() {

  },
  methods: {
    //Добавление товара в корзину
    addCart(product) {
      this.$emit('add', product);
    }
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
  transition: 200ms;
}

.btn:hover {
  background-color: #fff;
  color: #41b883;
  transition: 200ms;
}

.list {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  background-color: #fff;
  border: 1px solid #2c3e501f;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 0;
}

.item {
  width: 250px;
  height: 240px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  cursor: default;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transition: 200ms;
}

.item:hover {
  border-top: 1px solid #0000001a;
  border-bottom: 1px solid #0000001a;
  transition: 200ms;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  max-width: 100%;
}

.image img {
  max-width: 100%;
  max-height: 100%;
}

.title {
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  text-align: left;
  font-weight: 500;
  margin-top: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>