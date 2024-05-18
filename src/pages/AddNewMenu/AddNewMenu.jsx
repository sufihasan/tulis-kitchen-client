import Swal from "sweetalert2";


const AddNewMenu = () => {
    const handleAddMenu = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(name, image, price, description);

        const newRecipe = { name, image, price, description }

        console.log(newRecipe);
        //send data to server
        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Menu Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <h2 className="text-3xl text-center border-4">Add a New Menu</h2>

            <div className="w-3/4 mx-auto my-6">
                <form onSubmit={handleAddMenu} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Menu Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Menu Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Image" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Desceiption" className="input input-bordered" required />

                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/2 mx-auto">Add Menu</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddNewMenu;