import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";

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
                path: 'category/:id',
                element: <Category></Category>
            }
        ]
    }
])