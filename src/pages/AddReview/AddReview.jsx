import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData, useNavigate } from "react-router-dom";


const AddReview = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log('ad revi', user?.displayName);
    const id = useLoaderData();
    // console.log(id);

    const handleReview = event => {
        if (!user) {
            alert('for add review login frist');
            navigate('/login');
            return;
        }
        event.preventDefault();

        const form = event.target;

        const review = form.review.value;
        const email = user?.email;
        const displayName = user?.displayName;
        const userPhoto = user?.photoURL;

        const reviewData = {
            customerName: displayName,
            email,
            userPhoto,
            menu_id: id,
            review

        }

        console.log(reviewData);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Review added successfully');
                    navigate(`/recipes/${id}`);

                }
            })

    }
    return (
        <div>

            <form onSubmit={handleReview}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <input type="text" placeholder="Write your review Here" name="review" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control my-6 ">
                    <input className="btn btn-primary w-56" type="submit" value="Review Confirm" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;