<template class="">
  <ul
    class="recipes main-carousel"
    data-flickity='{"groupCells": true,"wrapAround": true,"fullscreen": true, "percentPosition": false,
"prevNextButtons": false,"pageDots": false, "freeScroll": false}'
  >
    <li class="recipe carousel-cell" v-for="prod in products" :key="prod.id">
      <div class="content">
        <div class="description">
          <h3 class="title">{{ prod.name }}</h3>
          <p class="content">
            {{ prod.description }}
          </p>
        </div>
        <div class="ingredients">
          <h3 class="title">Ingredients</h3>
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
                <span class="name">{{ name }}</span>
                <span class="desc">{{ value }}</span>
              </div>
            </li>
          </ul>
          <button class="button">View all ingredients</button>
        </div>
        <div class="nutrition">
          <ul class="nut__list">
            <h3 class="nut-title title">Nutritional Values</h3>
            <li
              class="nut__elem"
              v-for="{ kcal, protein, fats, carbs } in prod.nutritionalValues"
              :key="kcal"
            >
              <div class="kcal nut-val">
                <span>{{ kcal }} </span><span>Calories</span> <span>Kcal</span>
              </div>
              <div class="protein nut-val">
                <span> {{ protein }} </span> <span>Protein</span> <span>g</span>
              </div>
              <div class="fats nut-val">
                <span>{{ fats }}</span> <span>Fats</span> <span>g</span>
              </div>
              <div class="carbs nut-val">
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
      <div class="image__recipe">
        <img
          :src="require('@/assets/images/foods/' + prod.image + '.png')"
          alt="steak"
        />
      </div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300;400;500;700&display=swap");
.title {
  font-family: "Arima Madurai", cursive;
}
.nut__buttons {
  margin-bottom: 2em;
}
.carousel.is-fullscreen .carousel-cell {
  height: 100%;
}
.recipes {
  overflow: hidden;
  outline: none;
  min-height: 1000px;
  color: #404040;
  display: flex;
  text-align: left;
}
.recipe {
  width: 800px;
  padding: 1em 0.5em;
  margin-right: 25em;
  border-radius: 20px;
  border: 6px solid #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  & .content {
    max-width: 650px;
    width: auto;
    font-size: 13px;
  }
}
.description {
  & .title {
    font-size: 24px;
    margin: 0.1em 0;
  }
}
.description,
.nut__list,
.button {
  margin-left: 1em;
}
.nut__list {
  & .nut-title {
    color: #969696;
    font-size: 1.5em;
    margin-bottom: 0;
  }
}

.ingredients {
  & .button {
    margin-bottom: 1em;
  }
  & .title {
    margin: 0;
    margin-left: 0.6em;
    font-size: 1.5em;
    color: #969696;
  }
}

h1 {
  color: Red;
}
.elem-img {
  max-width: 32px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid white;
  padding: 1em 0.9em;
  padding: 0.7em 0.6em;
  border-radius: 7px;
}
.elem-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  & .name {
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
  }
  & .desc {
    color: #969696;
    font-size: 0.8em;
  }
}
.ingredients__elem {
  min-width: 150px;
  flex-grow: 1;
  flex-basis: 25%;
  margin: 0.7em 0.2em;
  display: flex;
}
.ingredients__list {
  max-width: 50%;
  margin: 0 0 1em 1em;
  display: flex;
  flex-wrap: wrap;
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

.image__recipe {
  position: absolute;
  right: -250px;
  top: 15%;
  & img {
    object-fit: contain;
    width: 500px;
    height: 500px;
  }
}
// Nutrition style
.nut__elem {
  margin: 0 0 1em 0;
  display: flex;
}
.nut-val {
  font-family: "Roboto", sans-serif;
  &:first-child {
    margin-left: unset;
  }
  border-radius: 7px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.8em;
  border: 1px solid white;
  width: 50px;
  padding: 0.8em 1em;
  font-weight: 500;
  gap: 10px;
  & span:first-child {
    font-size: 22px;
  }
  & span:nth-child(2) {
    font-size: 13px;
  }
  & span:nth-child(3) {
    color: #969696;
    font-size: 14px;
  }
}
</style>