import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import Destination from "./Pages/destination";
import Crew from "./Pages/crew";
=======

import Crew from "./Pages/crew";
import Destination from "./Pages/destination";
>>>>>>> 13d94187807d2d4dec800b097899e7f21933d276
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

