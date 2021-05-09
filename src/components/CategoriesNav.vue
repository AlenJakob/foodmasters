<template>
  <div class="navigation">
    <div class="logo"><span>Food</span><span>Masters</span></div>
    <ul class="list">
      <li class="elem">All</li>
      <li class="elem" v-for="cat in categories" :key="cat.id">
        {{ cat.value }}
      </li>
    </ul>
    <!-- <h1 @click="addRecipe()">{{ $store.state }}</h1> -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, onMounted} from "vue";
import { categories } from "../assets/categories";
export default defineComponent({
  setup() {
    const store = useStore();
    onMounted(() => {
      console.log(categories);
      console.log(store);
    });

    return {
      categories,
      // addRecipe: () => store.dispatch("addRecipe"),
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  font-weight: 500;
  color: #969696;
  display: flex;
  flex-wrap: wrap;
}
.elem {
  transition: 0.3s;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px;
  text-transform: capitalize;
  &:hover {
    color: #404040;
  }
}
.logo {
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  font-family: "Arima Madurai", cursive;
  color: #404040;
  font-size: 3em;
  font-weight: 700;
  &:hover {
    color: #969696;
  }
}
</style>