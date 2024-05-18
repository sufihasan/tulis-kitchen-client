
const Hero = () => {
    return (
        <div className="hero  bg-base-200 my-6 rounded py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/4">
                    <img className="max-w-sm md:w-full rounded-full shadow-2xl " src="https://i.ibb.co/h1Fpgf0/herophoto.png" />

                </div>
                <div className="md:w-3/4">
                    <h1 className="text-4xl font-bold">HOMEMADE
                        HEALTHY <span className="text-orange-600">PRODUCT</span></h1>
                    <p className="py-6 text-3xl font-bold">FOR YOUR BABY</p>
                    <button className="btn btn-primary text-white">Get it now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;