import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Others/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://dragon-news-api-server.vercel.app/news')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-api-server.vercel.app/category/${params.id}`)
            },
            {
                path: 'news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params})=> fetch(`https://dragon-news-api-server.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])