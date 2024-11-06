import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Helmet } from 'react-helmet';
// import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Routes/Route.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import Details from './Components/Details/Details.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Cart from './Components/Cart/Cart.jsx'
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import Satistics from './Components/Satistics/Satistics.jsx'
import YourWish from './Components/YourWish/YourWish.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>

      
      },
      {
        path: 'gadgets/:gadgetId',
        element: <Details></Details>,
        loader: ()=> fetch('/gadgets.json') 
      },{
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('./gadgets.json'),
       
      },{
        path: 'cart',
        element: <Cart></Cart>

      },
      {
        path: 'wishList',
        element: <Wishlist></Wishlist>
      },{
        path :'satistics',
        element: <Satistics></Satistics>
      },{
        path: 'yourwish',
        element: <YourWish></YourWish>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
