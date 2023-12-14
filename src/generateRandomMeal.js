import fetchRandomMeal from './fetchRandomMeal';


async function generateRandomMeal() {
    try{
      const { recipe } = await fetchRandomMeal();
      return {title: recipe.label, image: recipe.image, url: recipe.uri};
    } catch (error) {
        console.error('Error generating random meal' + error);
        return null;
    }
}


export default generateRandomMeal;