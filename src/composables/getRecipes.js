
import { ref } from "vue";
import db from "../../db.json"
export default function getRecipes() {
    // const loading = ref(false)
    const recipes = ref([])
    const favoriteRecipes = ref([])

    console.log(db.recipes)
    recipes.value.push(...db.recipes)

    function addToFavorite(givenId) {

        let findId = favoriteRecipes.value.find((e) => e.id === givenId);

        if (findId) {
            favoriteRecipes.value = favoriteRecipes.value.filter(recipe => recipe.id !== givenId)
        } else if (!findId) {
            favoriteRecipes.value.push({ id: givenId });
        }

    }
    async function fetchRecipes() {
        console.log("TESTT")
        // loading.value = true
        // products.value = await fetchProduct(params)
        // loading.value = false
    }
    // const fetchProduct = () => {
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json()).then(data=> data)
    // }


    return {
        recipes,
        fetchRecipes,
        favoriteRecipes,
        addToFavorite

    }
}