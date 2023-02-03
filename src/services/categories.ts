import { httpGetCall } from "./http"

const uri = "https://www.thecocktaildb.com/api/json/v1/1/"

export async function getCategories(){
  return httpGetCall(uri + "list.php?c=list")
}
