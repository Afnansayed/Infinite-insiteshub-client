import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AddBlog from "../Pages/AddBlog/AddBlog";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Update from "../Pages/Update/Update";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import WishList from "../Pages/WishList/WishList";
import Error from "../components/Error/Error";
import Fetured from "../Pages/Featured/Fetured";
import Transelator from "../Pages/Transelator/Transelator";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error></Error>,
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
          path:'/transelator',
          element:<Transelator/>
        },{
            path:'/addBlog',
            element: <PrivateRoute><AddBlog/></PrivateRoute> 
        },
        {
          path: '/allBlog',
          element: <PrivateRoute><AllBlogs/></PrivateRoute> 
        },
        {
          path: '/wishList',
          element:  <PrivateRoute><WishList/></PrivateRoute>
        },{
          path: '/fetured',
          element:  <PrivateRoute><Fetured/></PrivateRoute>
        },{
          path: '/details/:id',
          element: <PrivateRoute><ViewDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5500/allBlogs/${params.id}`)
        },{
          path: '/update/:id',
          element: <PrivateRoute><Update/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5500/allBlogs/${params.id}`)
        },
      ]
    },
  ]);

export default router;  