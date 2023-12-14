import { useEffect, useState } from 'react';
import { rightArrow } from './assets/icons';
import generateRandomMeal from './generateRandomMeal';

const RandomMeal = () => {
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { title, image, url } = await generateRandomMeal();
            setMealData({ title, image, url });
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

    const { title, image} = mealData;
    return (
        <section className='flex my-16 max-container max-h-[40rem]'>
            <div className='flex flex-1'>
                <div className='bg-gray flex-1 overflow-hidden'>
                    <div className='pt-32 pl-20 flex flex-col pr-5 justify-around h-full'>
                        <h2 className='font-oswald font-medium text-6xl break-words max-w-sm'>{title}</h2>
                        <p className='font-roboto text-justify break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non corrupti aspernatur nemo exercitationem! Atque explicabo delectus commodi nihil, tempore cupiditate nobis perferendis consectetur sapiente, molestias quae consequatur doloremque exercitationem!</p>
                        <div className='flex justify-start'>
                            <button className='bg-black text-white py-4 px-8 rounded-2xl flex justify-center items-center gap-4'>View Recipe <img src={rightArrow} alt="right arrow" height={25} width={25} /></button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='w-full h-full' src={image} alt="burger"/>
                </div>
            </div>
        </section>
    )
}

export default RandomMeal