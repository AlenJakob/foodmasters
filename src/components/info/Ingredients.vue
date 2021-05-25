<template>
  <div class="ingredients">
    <h3 class="title">Ingredients</h3>
    <ul class="ingredients__list">
      <li
        class="ingredients__elem"
        v-for="{ name, value } in getIngredients"
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
    <button class="button" @click="changeState">View all ingredients</button>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  props: {
    ingredients: Array,
  },
  setup(props) {
    let viewIngredients = ref(true);
    const changeState = () => {
      viewIngredients.value = !viewIngredients.value;
      console.log(props.ingredients);
    };
    return {
      changeState,
      viewIngredients,
      getIngredients: computed(() => {
        return viewIngredients.value
          ? props.ingredients.slice(0, 2)
          : props.ingredients;
      }),
    };
  },
});
</script>

<style lang="scss">
.ingredients__elem {
  min-width: 150px;
  flex-grow: 1;
  flex-basis: 25%;
  margin: 0.7em 0.2em;
  display: flex;
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
.ingredients__list {
  max-width: 50%;
  margin: 0 0 1em 1em;
  display: flex;
  flex-wrap: wrap;
}
.ingredients {
  & .button {
    margin: 0 0 1em 1em;
  }
  & .title {
    margin: 0;
    margin-left: 0.6em;
    font-size: 1.5em;
    color: #969696;
  }
}
</style>