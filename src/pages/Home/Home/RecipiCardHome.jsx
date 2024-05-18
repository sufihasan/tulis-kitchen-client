import { Link } from "react-router-dom";


const RecipiCardHome = ({ recipe }) => {
    const { _id, name, image, price, description } = recipe;
    const des = description;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl ">
            <figure><img className="w-full h-96" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="text-2xl">Price: {price} Tk</h2>
                <p>{des.length > 100 ? des.substring(0, 100) + '...' : des}</p>
                <div className="card-actions justify-end">
                    <Link to={`/recipes/${_id}`}>
                        <button className="btn btn-primary">Detail</button>
                    </Link>
                    <Link to={`/cart/${_id}`}>
                        <button className="btn btn-primary">Add to cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipiCardHome;