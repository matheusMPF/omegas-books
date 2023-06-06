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
import AdminPage from './Pages/AdminPage';
import FormNewBook from './Components/Admin/Tables/TypeTables/FormNewBook/FormNewBook';

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
        path: "admin",
        element: <AdminPage/>
      },

      {
        path: "/adimin/formnewbook",
        element: <FormNewBook/>
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
