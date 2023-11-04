import { Children } from "react";
import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Home/Login/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import RegTerms from "../Pages/Shared/RegTerms/RegTerms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login />
            }, {
                path: 'register',
                element: <Register />
            }, {
                path: 'regTrems',
                element: <RegTerms />
            }
        ]
    },
    {
        path: "category",
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }, {
        path: 'news',
        element: <PrivetRoutes><NewsLayout /></PrivetRoutes>,
        children: [
            {
                path: ':id',
                element: <News />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);
export default router;