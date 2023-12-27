import fetchRandomMeal from './fetchRandomMeal';


async function generateRandomMeal() {
    try{
      const response = await fetchRandomMeal();

      const recipes = [];
      // create array of recipes that contains object of recipe
      for (let i = 0; i < response.length; i++) {
        recipes.push({label:response[i].recipe.label, img:response[i].recipe.image, url:response[i].recipe.url, totalTime:response[i].recipe.totalTime, mealType:response[i].recipe.mealType})
      }
      return recipes;
    } catch (error) {
        console.error('Error generating random meal' + error);
        return null;
    }
}


export default generateRandomMeal;