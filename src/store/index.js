import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      favoriteRecipes: []
    }

  },
  actions: {
    addRecipe(context) {
      context.commit('addToFavorite')
    }
  },
  mutations: {
    addToFavorite(state, recipe) {
      console.log('recipe mutation', recipe)
      state.favoriteRecipes.push(recipe)
    }
  }
})