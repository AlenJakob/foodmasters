<template>
  <CategoriesNav />
</template>

<script>
import CategoriesNav from "./components/CategoriesNav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { CategoriesNav },

});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
