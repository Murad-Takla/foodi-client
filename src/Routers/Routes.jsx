import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Orders from "../Pages/Orders/Orders";

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
            element: <PrivateRouter><CheckoutPage></CheckoutPage></PrivateRouter>,
            loader: ({params})=> fetch(`http://localhost:3000/items/${params.id}`)
           },
           {
            path: '/signIn',
            element:<SignIn></SignIn>
           },
           {
            path: '/cart',
            element: <PrivateRouter><Orders></Orders></PrivateRouter>
           },
           {
            path: '/signUp',
            element:<SignUp></SignUp>
           }
        ]
      
    }
])