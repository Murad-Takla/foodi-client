import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           {
            path: '/items/:id',
            element: <CheckoutPage></CheckoutPage>,
            loader: ({params})=> fetch(`http://localhost:3000/items/${params.id}`)
           }
        ]
      
    }
])