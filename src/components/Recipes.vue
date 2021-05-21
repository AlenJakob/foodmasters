<template>
  <ul class="recipes">
    <li class="recipe">
      <div class="content">
        <div class="description">
          <h3 class="title">Chicken Steak</h3>
          <p class="text">
            Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a
            delicious meal in itself. The chicken is marinated in a lovely
            marinade that is bursting with flavours that include fresh parsley ,
            lemon, garlic and mixed herbs. All of which add to the yummilicious
            taste of the chicken.
          </p>
        </div>
        <div class="ingredients">
          <ul class="ingredients__list">
            <li class="ingredients__elem">
              <span>Chicken</span><span>1 chicken breast piece</span>
            </li>
            <li class="ingredients__elem">
              <span>Honey</span><span>1 Tbsp</span>
            </li>
            <li class="ingredients__elem">
              <span>Olive oil</span><span>1 Tbsp</span>
            </li>
            <li class="ingredients__elem">
              <span>Eggs</span><span>2 piece</span>
            </li>
          </ul>
          <button>View all ingredients</button>
        </div>
        <div class="nutrition">
          <ul class="nut__list">
            <li class="nut__elem">
              <span>Chicken</span><span>1 chicken breast piece</span>
            </li>
            <li class="nut__elem">
              <span>350</span><span>Calories</span><span>Kcal</span>
            </li>
            <li class="nut__elem">
              <span>15</span><span>protein</span><span>g</span>
            </li>
            <li class="nut__elem">
              <span>15</span><span>Fats</span><span>g</span>
            </li>
            <li class="nut__elem">
              <span>90</span><span>Carbs</span><span>g</span>
            </li>
          </ul>
          <div class="nut__buttons">
            <button>Recipe</button>
            <button>Add to favorites</button>
          </div>
        </div>
      </div>
      <div class="image__recipe"></div>
      <h1 v-for="prod in products" :key="prod.id">{{ prod.name }}</h1>
    </li>
  </ul>
</template>

<script>
import getRecipes from "@/composables/getRecipes";
import { onMounted, computed } from "vue";
export default {
  setup() {
    const { products } = getRecipes();
    onMounted(() => {
      console.log(products.value);
    });
    return {
      product: computed(() => products.value[0]),
      products: computed(() => products.value),
    };
  },
};
</script>
<style scoped>
.recipes {
  color: #404040;
  display: flex;
  text-align: left;
  padding: 1em 2em;
  border-radius: 20px;
  border: 6px solid #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
.recipe {
}
.title {
  font-size: 1.4em;
}
h1 {
  color: Red;
}
</style>