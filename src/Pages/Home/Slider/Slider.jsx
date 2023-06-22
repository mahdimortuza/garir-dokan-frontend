import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Slider = () => {
    const [change, setChange] = useState(false)
    return (
        <div className='hidden lg:block'>
            <h1 className='pb-8 text-white font-bold text-center text-4xl'>Toy Gallery</h1>

            <div className='px-8 mt-10 md:px-24'>

                <div className={` ${change ? 'hidden' : 'flex justify-center md:px-0 '}`}>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/11-flexing-car-with-dog.gif"></img>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/24-dancing-blue-car.gif"></img>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/4-dancing-food-truck.gif"></img>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/11-flexing-car-with-dog.gif"></img>
                </div>

                <div className={` ${change ? 'flex justify-center md:px-0 ' : 'hidden'}`}>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/g2.gif"></img>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/g1.gif"></img>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/g2.gif"></img>
                    <img className='w-64 h-64' src="https://raw.githubusercontent.com/mahdimortuza/project-img/main/gifs/giphy-2--unscreen.gif"></img>
                </div>

                <div className='flex justify-center mt-5' onClick={() => setChange(!change)}>
                    <span>
                        {
                            change === true ?
                                <ArrowLeftIcon className=" mr-10 h-10 p-2 rounded-3xl  bg-white text-black w-10" /> :
                                <ArrowLeftIcon className=" mr-10 h-10 p-2 rounded-3xl  bg-white text-black w-10" />
                        }

                    </span>
                    <span>
                        {
                            change === true ?
                                <ArrowRightIcon className="ml-10  h-10 p-2 rounded-3xl  bg-white text-black w-10" /> :
                                <ArrowRightIcon className="ml-10  h-10 p-2 rounded-3xl  bg-white text-black w-10" />
                        }

                    </span>
                </div>

            </div>
        </div>
    );
};

export default Slider;