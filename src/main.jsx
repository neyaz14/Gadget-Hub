import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Routes/Route.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import Details from './Components/Details/Details.jsx';



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
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
