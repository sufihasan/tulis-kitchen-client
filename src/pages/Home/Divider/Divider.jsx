

const Divider = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">


            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/2cXbyvm/soup1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-10">
                    <div className="max-w-md">
                        <p className="mb-5 text-5xl">Healthy Recipes</p>
                    </div>
                </div>
            </div>

            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/vQczhHq/salad1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-10">
                    <div className="max-w-md">
                        <p className="mb-5 text-5xl">Most Helthy Food for Your Baby</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Divider;