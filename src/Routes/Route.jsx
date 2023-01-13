import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-products',
                element: <AllProducts />
            }
        ]

    }
])