import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Crew from "./Pages/crew";
import Destination from "./Pages/destination";
import Technology from "./Pages/technology";

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
  },
  {
    path: "destination", element: <Destination />,
  },
  {
    path: "crew", element: <Crew />,
  },
  {
    path: "technology", element: <Technology />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

