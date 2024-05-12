import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AddBlog from "../Pages/AddBlog/AddBlog";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element: <Home/>
        }, {
            path:'/login',
            element:<LogIn/> 
        },{
            path:'/register',
            element: <Register/>
        },{
            path:'/addBlog',
            element: <PrivateRoute><AddBlog/></PrivateRoute> 
        },{
          path: '/details/:id',
          element: <PrivateRoute><ViewDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allBlogs/${params.id}`)
        },{
          path: '/update/:id',
          element: <PrivateRoute><Update/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allBlogs/${params.id}`)
        },
      ]
    },
  ]);

export default router;  