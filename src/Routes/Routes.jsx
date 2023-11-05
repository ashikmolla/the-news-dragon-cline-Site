
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
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

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
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-site-ashikmolla.vercel.app/categories/${params.id}`),
                // loader: ({ params }) => fetch(`https://the-news-dragon-server-site-jdzkds8vb-ashikmolla.vercel.app/categories/${params.id}`),
            }
        ]
    }, {
        path: 'news',
        element: <PrivetRoutes><NewsLayout /></PrivetRoutes>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                // loader: ({ params }) => fetch(`https://the-news-dragon-server-site-jdzkds8vb-ashikmolla.vercel.app/news/${params.id}`)
                loader: ({ params }) => fetch(`https://the-news-dragon-server-site-ashikmolla.vercel.app/news/${params.id}`)
            }
        ]
    },{
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
]);
export default router;