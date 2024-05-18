import useRecipes from "../../hooks/useRecipes";
import RecipeCard from "./RecipeCard";


const Recipes = () => {
    const recipes = useRecipes();
    console.log(recipes);
    return (
        <div>
            <p>total recipe: {recipes.length}</p>
            <h2 className="text-3xl">My Recipes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
                {
                    recipes?.map(recipe => <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>

        </div>
    );
};

export default Recipes;