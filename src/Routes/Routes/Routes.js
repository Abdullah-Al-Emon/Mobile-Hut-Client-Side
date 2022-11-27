import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/signIn',
                element: <SignIn/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/category/:id',
                element: <Products></Products>,

            }
        ]
    }
])