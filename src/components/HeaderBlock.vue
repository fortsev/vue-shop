<template>
  <header>
    <router-link :to="{ name: 'home' }"><div class="logo">
      <img src="../assets/logo.png" alt="logo">
      <span>VueShop</span>
    </div>
    </router-link>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'home' }">
          Главная
        </router-link></li>
        <li><router-link :to="{ name: 'catalog' }">
          Каталог
        </router-link></li>
      </ul>
    </nav>
    <CartBlock
        :cart="cart"
        @changeCount="changeCount"
    />
  </header>
</template>

<script>
import CartBlock from "@/components/CartBlock";

export default {
  name: "HeaderBlock",
  components: {
    CartBlock,
  },
  props: {
    cart: Array,
  },
  methods: {
    changeCount(data) {
      this.$emit('changeCount', data)
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  max-width: 50px;
}

.logo span {
  margin-left: 7px;
  font-size: 20px;
  font-weight: 700;
}

nav {
  margin-left: auto;
  margin-right: 10px;
}

ul {
  display: flex;
  padding: 0;
}

li {
  margin: 0 10px;
  padding: 0;
  list-style-type: none;
}
</style>