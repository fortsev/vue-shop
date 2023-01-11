<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="logo">
      <span>VueShop</span>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">Каталог</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
    <div class="cart">
      <svg width="22" height="22" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3629 9.35C13.0002 9.35 13.561 9.0015 13.8499 8.4745L16.8917 2.958C17.2061 2.397 16.7983 1.7 16.1525 1.7H3.57717L2.77847 0H0V1.7H1.69937L4.75823 8.1515L3.61116 10.2255C2.99089 11.3645 3.80659 12.75 5.09811 12.75H15.2943V11.05H5.09811L6.03276 9.35H12.3629ZM4.38437 3.4H14.708L12.3629 7.65H6.39812L4.38437 3.4ZM5.09811 13.6C4.16345 13.6 3.40723 14.365 3.40723 15.3C3.40723 16.235 4.16345 17 5.09811 17C6.03276 17 6.79748 16.235 6.79748 15.3C6.79748 14.365 6.03276 13.6 5.09811 13.6ZM13.595 13.6C12.6603 13.6 11.9041 14.365 11.9041 15.3C11.9041 16.235 12.6603 17 13.595 17C14.5296 17 15.2943 16.235 15.2943 15.3C15.2943 14.365 14.5296 13.6 13.595 13.6Z"/>
      </svg>
      <span class="cart-quantity">
        99
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBlock"
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
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

.cart {
  position: relative;
  margin-right: 18px;
  cursor: pointer;
}

.cart svg {
  fill: #2c3e50;
  transition: 200ms;
}

.cart:hover svg {
  fill: #41b883;
  transition: 200ms;
}

.cart-quantity {
  min-width: 17px;
  height: 15px;
  padding: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  right: -15px;
  top: -13px;
  background: #fff;
  border: 1px solid #41b883;
  border-radius: 100px;
  font-size: 11px;
}
</style>