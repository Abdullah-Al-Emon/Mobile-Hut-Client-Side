import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyer from "../../Pages/Dashboard/Admin/AllBuyer";
import AllSeller from "../../Pages/Dashboard/Admin/AllSeller";
import ReportedItem from "../../Pages/Dashboard/Admin/ReportedItem";
import MyOrder from "../../Pages/Dashboard/Buyers/MyOrder";
import MyWishlist from "../../Pages/Dashboard/Buyers/MyWishlist";
import MyBuyers from "../../Pages/Dashboard/Seller/MyBuyers";
import MyProduct from "../../Pages/Dashboard/Seller/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path: '/dashboard/myWishlist',
                element: <BuyerRoute><MyWishlist/></BuyerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/myBuyer',
                element: <SellerRoute><MyBuyers/></SellerRoute>
            },
            {
                path: '/dashboard/allSeller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/reportedItem',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },
            
        ]
    }
])