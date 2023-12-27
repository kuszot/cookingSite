import {twittericon,instagram,facebook} from './assets/icons'
import CookingWithFamilySection from './CookingWithFamilySection'
import RandomMeal from './RandomMeal'
import MealCard from './MealCard'
import {Route, Routes,Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import generateRandomMeal from './generateRandomMeal';

const App = () => {
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const recipes = await generateRandomMeal();
            setMealData(recipes);
        } catch (error) {
            console.error('Error fetching random meal', error);
        }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs once on component mount

    if (!mealData) {
        // Optional: Add a loading state or handle the absence of data
        return <p>Loading...</p>;
    }

    return (
        <main className="relative text-black">
            <header className='px-10 py-6 w-full border-b font-noto'>
                <nav className='flex flex-row justify-between items-center'>
                    <Link className="font-bold" to="/"><h1>EdibleEasel<span className="text-[#9E1515]">.</span></h1></Link>
                    <ul className='flex gap-5'>
                        <Link to='/home' className='cursor-pointer hover:font-black'>Home</Link>
                        <li className='cursor-pointer hover:font-black '>Recipes</li>
                        <li className='cursor-pointer hover:font-black'>Contact</li>
                        <li className='cursor-pointer hover:font-black'>About us</li>
                    </ul>
                    <div className='flex gap-3'>
                        <a href=""><img src={facebook} width={20} height={20} alt="facebook" /></a>
                        <a href=""><img src={twittericon} width={20} height={20} alt="twitter" /></a>
                        <a href=""><img src={instagram} width={20} height={20} alt="instagram" /></a>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={
                <>
                    <section className='pl-9 pr-9'>
                        <RandomMeal mealData={mealData[0]}/>
                    </section>
                    <section className='pl-9 pr-9 mt-36'>
                        <CookingWithFamilySection/>
                    </section>
                    <section className='pl-9 pr-9'>
                        <div className='max-container flex justify-between'>
                            {
                                Array.from({length: 3}).map((_,index) => {
                                    return <MealCard key={index} mealData={mealData[index+1]}/>
                                })
                            }
                        </div>
                    </section>
                </>
                }/>
            </Routes>
            <footer className="flex p-8 justify-center items-center border-t mt-28">
                <p className="font-roboto">&copy; 2023 EdibleEasel</p>
            </footer>
        </main>
    )
}
export default App