import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Blog from "../Pages/Blog/Blog";
import Course from "../Pages/Course/Course";
import ErrorPage from "../Pages/Course/ErrorPage/ErrorPage";
import Courses from "../Pages/Courses/Courses";
import Fqa from "../Pages/Fqa/Fqa";
import Home from "../Pages/Home/Home";
import Primum from "../Pages/Primium/Primum";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";

export const router=createBrowserRouter([
    {
        path:"/",element:<Main></Main>,errorElement:<ErrorPage></ErrorPage>,
        
        children:[
            {
                path:'/',element:<Home></Home>,
               
            },

            {
                    path:'/course',element:<Course></Course>,
                    loader:()=>fetch('http://localhost:5000/data')
            },
            {
                path:"/courses/:id", element:<Courses></Courses>,
                loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
            },
            {
                path:"/fqa",element:<Fqa></Fqa>
            },
            
            {
                path:"/blog",element:<Blog></Blog>
            },
            {
                path:'/primium/:id',element:<PrivateRoute><Primum></Primum></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
            },
            {
                path:"/login",element:<Login></Login>
            },
            {
                path:"/register",element:<Register></Register>
            }
        ]
    }
])