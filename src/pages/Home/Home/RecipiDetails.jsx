import { Link, useLoaderData } from "react-router-dom";
import ReviewShow from "./ReviewShow";


const RecipiDetails = () => {
    const singleRecipe = useLoaderData();
    const { _id, name, image, price, description } = singleRecipe;
    return (
        <div>


            <div className="flex flex-col w-full lg:flex-row">
                <div className="w-1/2">
                    <h2 className="text-3xl text-center border">Details</h2>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Shoes" className=" h-96 w-full" />
                        </figure>
                        <div className="card-body items-center ">
                            <h2 className="card-title">{name}</h2>
                            <h2>Price:{price}</h2>
                            <p>{description}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="w-1/2">
                    <h2 className="text-3xl text-center border">Reviews</h2>
                    <div>
                        <div>
                            <ReviewShow id={_id}></ReviewShow>
                        </div>
                        <Link to={`/addreview/${_id}`}>
                            <button className="btn btn-primary">Add Review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipiDetails;