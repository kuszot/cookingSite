const APP_ID = "0518ddc0";
const APP_KEY = "45b7387945e8edafbf98673c3e841ccb";

async function fetchRandomMeal() {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=REGULAR&random=true`);
  if(!response.ok) {
    throw new Error(`fetchRandomMeal not okay`);
  }
  return (await response.json()).hits[0];

}



export default fetchRandomMeal;

