import { ref } from "vue"
export default function getRecipes() {
    // const loading = ref(false)
    const products = ref([])


    products.value.push( { name: "prod" })

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
        // loading: computed(() => loading.value),
        products,
        fetchRecipes

    }
}