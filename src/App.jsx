import {twittericon,instagram,facebook} from './assets/icons'

const App = () => (
    <main className="relative">
        <header className='px-10 py-6 w-full border-b font-noto'>
            <nav className='flex flex-row justify-between items-center'>
                <a className="font-bold" href="/">EdibleEasel<span className="text-[#9E1515]">.</span></a>
                <ul className='flex gap-5'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Recipes</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>About us</li>
                </ul>
                <div className='flex gap-3'>
                    <a href=""><img src={facebook} width={20} height={20} alt="facebook" /></a>
                    <a href=""><img src={twittericon} width={20} height={20} alt="twitter" /></a>
                    <a href=""><img src={instagram} width={20} height={20} alt="instagram" /></a>
                </div>
            </nav>
        </header>
    </main>
)

export default App