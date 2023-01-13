<template>
  <div class="category-list">
    <h3>Категории</h3>
    <ul>
      <li
          @click="$emit('choosingCategory', '')"
          :class="{active : activeCategory === ''}"
      >
        Все
      </li>
      <li
          v-for="(item) in category"
          :key="item"
          @click="$emit('choosingCategory', item)"
          :class="{active : item === activeCategory}"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryMenu",
  data() {
    return {

    }
  },
  props: {
    category: Array,
    activeCategory: String,
  },
  methods: {
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 5px;
  text-align: left;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
}

li {
  margin: 5px;
  padding: 10px;
  background: #fff;
  list-style-type: none;
  box-sizing: border-box;
  border: 1px solid #e9ebed;
  border-radius: 10px;
  cursor: pointer;
  transition: 200ms;
}

li:first-child {
  margin-left: 0;
}

li:hover, li.active {
  border-color: #41b883;
  transition: 200ms;
}

</style>