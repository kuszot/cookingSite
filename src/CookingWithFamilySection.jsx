import {familyImage} from './assets/images'

const CookingWithFamilySection = () => {
  return (
    <section className="max-container mb-36 ">
        <div className='flex gap-8'>
            <div className='flex-1'>
                <img src={familyImage} alt="image of a cooking family"/>
            </div>
            <div className='flex-1 flex flex-col gap-10'>
                <h2 className='font-oswald text-6xl text-right'>Share with Us: Cook with Family and Friends</h2>
                <p className='font-roboto text-right'>Cooking is not just an art; it&apos;s also a way to build relationships. That&apos;s why we encourage you to cook with your loved ones! You&apos;ll find ideas for dishes that can easily be prepared together with family and friends, creating unforgettable moments.
                Start your culinary journey with us, experiment, play with flavors, and be part of this fantastic community of culinary enthusiasts! Ready to cook?
                </p>
                <div className='flex justify-end'>
                    <button className='bg-black text-white py-4 px-8 rounded-2xl flex justify-center items-center gap-4'>Let&apos;s get started!</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CookingWithFamilySection