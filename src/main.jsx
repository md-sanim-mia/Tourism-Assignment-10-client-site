import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRote from './Layout/MainRote';
import Home from './Pages/Home';
import Login from './Compment/FormReleted/Login';
import Register from './Compment/FormReleted/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import TouristSport from './Pages/TouristSport';
import AddToursSorts from './Pages/AddToursSorts';
import MYLIst from './Pages/MYLIst';
import PrivtedRouted from './PrivtedRout/PrivtedRouted';
import AllProductDeatils from './Compment/AllProduct/AllProductDeatils';
import FeaterdDeatils from './Compment/TurushSport/FeaterdDeatils';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRote></MainRote>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/allTurist',
        element: <TouristSport></TouristSport>,
        loader: () => fetch('http://localhost:5000/products'),
      },
      {
        path: '/addTurist',

        element: (
          <PrivtedRouted>
            <AddToursSorts></AddToursSorts>
          </PrivtedRouted>
        ),
      },
      {
        path: '/myList',
        element: (
          <PrivtedRouted>
            {' '}
            <MYLIst></MYLIst>
          </PrivtedRouted>
        ),
      },
      {
        path: '/allProductDeatils/:id',
        element: (
          <PrivtedRouted>
            <AllProductDeatils></AllProductDeatils>{' '}
          </PrivtedRouted>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: '/featerDeatils/:id',
        element: (
          <PrivtedRouted>
            <FeaterdDeatils></FeaterdDeatils>{' '}
          </PrivtedRouted>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
