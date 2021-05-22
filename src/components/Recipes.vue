<template>
  <ul class="recipes">
    <li class="recipe" v-for="prod in products" :key="prod.id">
      <div class="content">
        <div class="description">
          <h3 class="title">{{ prod.name }}</h3>
          <p class="text">
            {{ prod.description }}
          </p>
        </div>
        <div class="ingredients">
          <h3 class="ing-title">Ingredients</h3>
          <ul class="ingredients__list">
            <li
              class="ingredients__elem"
              v-for="{ name, value } in prod.ingredients"
              :key="value"
            >
              <img
                class="elem-img"
                :src="require('@/assets/images/icons/' + name + '.png')"
                alt="icon "
              />

              <div class="elem-info">
                <span>{{ name }}</span>
                <span>{{ value }}</span>
              </div>
            </li>
          </ul>
          <button class="button">View all ingredients</button>
        </div>
        <div class="nutrition">
          <ul class="nut__list">
            <h3 class="nut-title">Nutritional Values</h3>
            <li
              class="nut__elem"
              v-for="{ kcal, protein, fats, carbs } in prod.nutritionalValues"
              :key="kcal"
            >
              <div>{{ kcal }} <span>Calories</span> <span>Kcal</span></div>
              <div>
                <span> {{ protein }} </span> <span>Protein</span> <span>g</span>
              </div>
              <div>
                <span>{{ fats }}</span> <span>Fats</span> <span>g</span>
              </div>
              <div>
                <span>{{ carbs }}</span> <span>Carbs</span> <span>g</span>
              </div>
            </li>
          </ul>
          <div class="nut__buttons">
            <button class="button">Recipe</button>
            <button class="button">Add to favorites</button>
          </div>
        </div>
      </div>
      <div class="image__recipe"></div>
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
<style lang="scss" scoped>
.recipes {
  overflow-x: scroll;
  display: flex;
  color: #404040;
  display: flex;
  text-align: left;
  border-radius: 20px;
  border: 6px solid #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
.recipe {
  min-width: 500px;
  padding: 1em;
  margin: 1em;
}
.description,
.ing-title,
.nut__list,
.button {
  margin-left: 1em;
}
.title {
  font-size: 1.4em;
}
h1 {
  color: Red;
}
.elem-img {
  max-width: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border: 1px solid white;
  padding: 1em 0.9em;
  border-radius: 7px;
}
.elem-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1em;
}
.ingredients__elem {
  flex-grow: 1;
  flex-basis: 0;
  margin: 1em;
  display: flex;
}
.ingredients__list {
  display: flex;
  flex-wrap: wrap;
}
.button {
  min-width: 200px;
  font-weight: bold;
  padding: 1em 2.5em;
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