import generateRandomMeal from './generateRandomMeal'
import { useEffect, useState } from 'react';
import { clockIcon,spoonAndForkIcon } from './assets/icons';

const MealCard = () => {
    const [mealImg, setMealImg] = useState(null);
    const [mealType, setMealType] = useState(null);
    const [mealTime, setMealTime] = useState(null);

    useEffect((id) => {
        const fetchData = async () => {
        try {
            const {image, mealType, totalTime} = await generateRandomMeal(id);
            setMealImg(image);
            setMealType(mealType);
            setMealTime(totalTime);
        } catch (error) {
            console.error('Error fetching random meal', error);
        }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs once on component mount
    
    const image = mealImg;
    const type = mealType;
    const time = mealTime;
    

    if (!image || !type) {
        // Optional: Add a loading state or handle the absence of data
        return <p>Loading...</p>;
    }

    return (
        <div className='font-roboto'>
            <div className='flex flex-col w-[350px]'>
                <img src={image} alt="image of meal" className='w-full'/>
                <div className='bg-gray flex justify-evenly items-center p-4 font-medium'>
                    <div className='flex items-center gap-1'><img src={clockIcon} alt="clock icon" height={25} width={25}/>{time >0 ? time: "???"} minutes</div>
                    <div className='flex items-center gap-1'><img src={spoonAndForkIcon} alt="icon of spoon and fork" height={25} width={25}/>{type}</div>
                </div>
            </div>
        </div>
    )
}

export default MealCard