import { Children } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        Children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
]);
export default router;