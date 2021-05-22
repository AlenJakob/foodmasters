import { ref } from "vue";
import db from "../../db.json"
export default function getRecipes() {
    // const loading = ref(false)
    const products = ref([])

    console.log(db.recipes)
    products.value.push(...db.recipes)

    async function fetchRecipes() {
        // loading.value = true
        // products.value = await fetchProduct(params)
        // loading.value = false
    }
    // const fetchProduct = () => {
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json()).then(data=> data)
    // }
    return {
        products,
        fetchRecipes

    }
}