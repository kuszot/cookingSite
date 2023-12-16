import fetchRandomMeal from './fetchRandomMeal';


async function generateRandomMeal(id=0) {
    try{
      const response = await fetchRandomMeal();
      const { recipe } = response[id];
      return recipe;
    } catch (error) {
        console.error('Error generating random meal' + error);
        return null;
    }
}


export default generateRandomMeal;