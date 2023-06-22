import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    const { title, _id, service_id, description, img, price, category, rating, email, name, qty } = data

    return (
        <div>
            <div className="card lg:card-side shadow-xl">
                <img className="w-1/2" src={img}></img>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{title}</h2>
                    <p className="font-bold text-2xl text-orange-300">Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p className="font-bold">Seller: {name}</p>
                    <p>Email: {email}</p>
                    <p className="text-yellow-400 text-2xl">Available Quantity: {qty}</p>
                    <p className="mt-5">Description: {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;