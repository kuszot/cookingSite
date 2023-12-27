const APP_ID = "0518ddc0";

async function fetchRandomMeal() {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${import.meta.env.VITE_REACT_APP_API_KEY}&imageSize=REGULAR&random=true`);
  if(!response.ok) {
    throw new Error(`fetchRandomMeal not okay`);
  }
  return (await response.json()).hits;

}



export default fetchRandomMeal;

