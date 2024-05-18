import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const reviews = useLoaderData();
    const result1 = reviews.filter((review) => review.email === user?.email);
    console.log(result1);
    // console.log('tik tok', reviews.length);
    return (
        <div>
            {result1.length > 0 ?
                result1.map(review => <div key={review._id} className="card w-full bg-base-100 shadow-xl my-4">
                    <div className="card-body">
                        <div className="flex">
                            <img className="w-10 rounded-full mr-2" src={review.userPhoto} alt="" />
                            <h2 className="card-title">{review.customerName}</h2>
                        </div>
                        <p>Review: {review.review}</p>
                    </div>
                </div>) : <p className="p-4 text-xl">0 review</p>
            }
        </div>
    );
};

export default MyReviews;