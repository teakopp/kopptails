import {httpGetCall} from "./http"

const uri = "https://www.thecocktaildb.com/api/json/v1/1/"

export async function getRandomDrink() {
  return httpGetCall(uri + "random.php")
}

export async function getDrinksByCategory(category:string){
  return httpGetCall(uri + `filter.php?c=${category}`)
}

export async function getDrinksByIngredient(ingredient:string){
  return httpGetCall(uri + `filter.php?i=${ingredient}`)
}

export async function getDrinksByServingGlass(servingGlass:string){
  return httpGetCall(uri + `filter.php?g=${servingGlass}`)
}

