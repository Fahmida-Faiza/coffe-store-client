import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdtaeCoffee from './components/UpdtaeCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {

    path: "addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee',
    element:<UpdtaeCoffee></UpdtaeCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
