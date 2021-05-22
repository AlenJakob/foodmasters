<template >
  <div class="container">
    <CategoriesNav />
    <Recipes />
    <div>
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import CategoriesNav from "./components/CategoriesNav.vue";
import Recipes from "./components/Recipes.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { CategoriesNav, Recipes },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@500;700;800;900&family=Roboto:wght@300;400;500&display=swap");
body {
  background-color: #f0f7ff;
  padding: 0;
  margin: 0;
}
#app {
  box-sizing: border-box;
  min-height: calc(100vh - 10px);
  box-shadow: inset 0 0 0 15px #fff;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  padding: 2em;
}
ul {
  list-style: none;
  padding: 0;
}
.button {
  background-color: #408eba;
  color: #fff;
}
</style>
