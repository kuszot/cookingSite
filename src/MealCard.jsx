import { clockIcon,spoonAndForkIcon } from './assets/icons';
const MealCard = ({mealData}) => {
    const {img,totalTime,mealType} = mealData;

    return (
        <div className='font-roboto'>
            <div className='flex flex-col w-[350px]'>
                <img src={img} alt="image of meal" className='w-full'/>
                <div className='bg-gray flex justify-evenly items-center p-4 font-medium'>
                    <div className='flex items-center gap-1'><img src={clockIcon} alt="clock icon" height={25} width={25}/>{totalTime >0 ? totalTime: "???"} minutes</div>
                    <div className='flex items-center gap-1'><img src={spoonAndForkIcon} alt="icon of spoon and fork" height={25} width={25}/>{mealType}</div>
                </div>
            </div>
        </div>
    )
}

export default MealCard