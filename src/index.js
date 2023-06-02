import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from "./Components/Menu/index"
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./Pages/Home";
import Autores from "./Pages/Autores";
import Colecoes from "./Pages/Colecoes";
import Sobre from './Pages/Sobre';
import ErrorPage from './Pages/ErrorPage';
import AdminBooks from './Pages/AdminBooks';
import FormBook from './Pages/FormBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <ErrorPage/>,
    children: [

      {
        path: "/",
        element: <Home />
      },

      {
        path: "autores",
        element: <Autores />
      },

      {
        path: "colecoes",
        element: <Colecoes/>
      },

      {
        path: "sobre",
        element: <Sobre/>
      },

      {
        path: "adminbooks",
        element: <AdminBooks/>
      },

      {
        path: "/adminBooks/formbook",
        element: <FormBook/>
      },

     
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
