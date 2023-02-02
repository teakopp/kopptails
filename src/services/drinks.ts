import axios from 'axios';

export async function getRandomDrink(){
 try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return response.data
  } catch (error) {
    console.error(error);
  }
}
  
