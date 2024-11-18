import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/Products/ProductsPage";
import ProductDetails from "../pages/Products/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails />,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            }
        ]
    }
])