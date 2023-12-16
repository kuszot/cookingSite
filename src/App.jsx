import {twittericon,instagram,facebook} from './assets/icons'
import CookingWithFamilySection from './CookingWithFamilySection'
import RandomMeal from './RandomMeal'
import MealCard from './MealCard'

const App = () => (
    <main className="relative text-black">
        <header className='px-10 py-6 w-full border-b font-noto'>
            <nav className='flex flex-row justify-between items-center'>
                <a className="font-bold" href="/"><h1>EdibleEasel<span className="text-[#9E1515]">.</span></h1></a>
                <ul className='flex gap-5'>
                    <li className='cursor-pointer hover:font-black'>Home</li>
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
        <section className='pl-9 pr-9'>
            <RandomMeal/>
        </section>
        <section className='pl-9 pr-9 mt-36'>
            <CookingWithFamilySection/>
        </section>
        <section className='pl-9 pr-9'>
            <div className='max-container flex justify-between'>
                <MealCard id={1}/>
                <MealCard id={2} />
                <MealCard id={3} />
            </div>
        </section>
    </main>
)
export default App