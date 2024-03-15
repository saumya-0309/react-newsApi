import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Home from "./Pages/Home.jsx"
import Fetchdata from './Compontes/Fetchdata.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
    children: [
      {
        path : "/home",
        element : <Home/>
      },
      {
        path : "/Business",
        element : <Fetchdata cat="Business"/>
      },
      {
        path : "/Entertainment",
        element : <Fetchdata cat="Entertainment"/>
      },
      {
        path : "/Health",
        element : <Fetchdata cat="Health"/>
      },
      {
        path : "/Science",
        element : <Fetchdata cat="Science"/>
      },
      {
        path : "/Sports",
        element : <Fetchdata cat="Sports"/>
      },
      {
        path : "/Technology",
        element : <Fetchdata cat="Technology"/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
