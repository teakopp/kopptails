
import { httpGetCall } from "./http"

const uri = "https://www.thecocktaildb.com/api/json/v1/1/"

export async function getGlasses(){
  return httpGetCall(uri + "list.php?g=list")
}
