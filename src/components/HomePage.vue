<template>
  <div class="home-page">
    <div class="container">
      <h2>Каталог товаров</h2>
      <CategoryMenu
          :category="category"
          :activeCategory="activeCategory"
          @choosingCategory="(name) => activeCategory = name"
      />
      <div class="list">

        <div class="item" v-for="(item) in sortProduct" :key="item.id">
          <div class="image">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="title">
            <a href="#">
              {{ item.title }}
            </a>
          </div>
          <div class="price">
            {{ item.price }} $
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu";

export default {
  name: "HomePage",
  components: {
    CategoryMenu,
  },
  data() {
    return {
      activeCategory: '',
    }
  },
  props: {
    product: Array,
    category: Array,
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
.home-page {
  padding: 40px 0;
}

.list {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff;
  border: 1px solid #2c3e501f;
  border-radius: 10px;
  box-sizing: border-box;
}

.item {
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  cursor: default;
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
}

.price {
  text-align: left;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>