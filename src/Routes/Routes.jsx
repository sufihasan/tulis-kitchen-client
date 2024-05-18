import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Recipes from "../pages/Recipes/Recipes";
import RecipiDetails from "../pages/Home/Home/RecipiDetails";
import Blogs from "../pages/Blogs/Blogs";
import Cart from "../pages/Cart/Cart";
import AddNewMenu from "../pages/AddNewMenu/AddNewMenu";
import PrivateRoutes from "./PrivateRoutes";
import AddReview from "../pages/AddReview/AddReview";
import MyReviews from "../pages/MyReviews/MyReviews";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tuli-kitchen-server.vercel.app/homerecipes')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'recipes',
                element: <Recipes></Recipes>
            },
            {
                path: 'recipes/:id',
                element: <RecipiDetails></RecipiDetails>,
                loader: ({ params }) => fetch(`https://tuli-kitchen-server.vercel.app/recipes/${params.id}`)
            },
            {
                path: 'myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
                loader: () => fetch('https://tuli-kitchen-server.vercel.app/reviews')
            },
            {
                path: 'addreview/:id',
                element: <AddReview></AddReview>,
                loader: ({ params }) => { const id = params.id; return id; }
            },
            {
                path: 'cart',
                element: <Cart></Cart>,
            },
            {
                path: 'cart/:id',
                element: <Cart></Cart>,
            },
            {
                path: 'addnewmenu',
                element: <PrivateRoutes><AddNewMenu></AddNewMenu></PrivateRoutes>,
            },

            {
                path: 'blog',
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default router;