import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../Pages/Home/Home";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },{
             path: "/product/:id",
             element: <ProductDetails/>
            }
        ]
    }
])

export default router;