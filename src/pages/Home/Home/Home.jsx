import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import RecipiCardHome from "./RecipiCardHome";
import Hero from "../Hero/Hero";
import Divider from "../Divider/Divider";


const Home = () => {
    const recipes = useLoaderData();
    return (
        <div>

            <Slider></Slider>
            <div className="my-6">
                <h2 className="text-center text-3xl font-bold">Our Populer <span className="text-orange-600">Recipes</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                    {
                        recipes.map(recipe => <RecipiCardHome
                            key={recipe._id}
                            recipe={recipe}
                        ></RecipiCardHome>)
                    }
                </div>
                <div className="flex justify-center">
                    <Link to='/recipes'>
                        <button className="btn btn-wide btn-primary text-xl">See All Recipe</button>
                    </Link>
                </div>
            </div>
            <Hero></Hero>
            <Divider></Divider>
        </div>
    );
};

export default Home;