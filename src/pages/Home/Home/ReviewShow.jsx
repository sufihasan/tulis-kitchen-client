import { useEffect, useState } from "react";



const ReviewShow = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    // console.log(id);

    const revi_menu_id = id;
    console.log(revi_menu_id);

    const result1 = reviews.filter((review) => review.menu_id === revi_menu_id);
    console.log(result1);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

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

export default ReviewShow;