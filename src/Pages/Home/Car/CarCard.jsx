import { Link } from "react-router-dom";


const CarCard = ({ car }) => {
    const { _id, title, img, price, category, rating } = car
    return (
        <div className="card 3/5 mx-5 text-black bg-base-100 shadow-xl">
            <figure className=" pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-3/5" />
            </figure>
            <div className="card-body flex ">
                
                <div className="flex justify-between">
                <div className="">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">{ rating}</p>

                <p className="text-xl text-red-400">Price: {price}</p>
                <p>Category: {category}</p>
                </div>

                <div className="card-actions">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">View Details</button>

                    </Link>

                </div>
                </div>

            </div>
        </div>
    );
};

export default CarCard;