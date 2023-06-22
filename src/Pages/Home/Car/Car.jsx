import { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Car = () => {

    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    

    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h1 className='pb-8 text-center text-white font-bold text-4xl'>Shop by category</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cars.map(car => <CarCard
                    key={car._id}
                    car={car}
                    ></CarCard>)
                }
            </div>
        </div>
    );
};

export default Car;