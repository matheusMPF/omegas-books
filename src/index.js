import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from "./Components/Menu/index"
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sobre from './Pages/Sobre';
import ErrorPage from './Pages/ErrorPage';
import AdminPage from './Pages/AdminPage';
import HomePage from './Pages/HomePage';
import AutoresPage from './Pages/AutoresPage';
import CadastroPage from './Pages/CadastroPage';
import ColecoesPage from './Pages/ColecoesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <ErrorPage/>,
    children: [

      {
        path: "/",
        element: <HomePage />
      },

      {
        path: "autores",
        element: <AutoresPage/>
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
        path: "cadastro",
        element: <CadastroPage/>
      },

      {
        path: "colecoes",
        element: <ColecoesPage/>
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
