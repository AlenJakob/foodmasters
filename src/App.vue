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
  box-shadow: inset 0 0 0 7px #fff;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  overflow: hidden;
}
ul {
  list-style: none;
  padding: 0;
}
.button {
  background-color: #408eba;
  color: #fff;
}
.button {
  width: 180px;
  font-weight: 500;
  padding: 0.7em 1.5em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    background-color: transparent;
    color: #408eba;
    border: 2px solid #408eba;
  }
}
</style>
