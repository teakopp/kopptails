import axios from "axios";

export async function getIngredients() {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
