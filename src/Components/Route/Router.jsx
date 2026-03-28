import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Website/Home';
import About from '../Website/About';
import Contact from '../Website/Contact';
import Navbar from '../Navbar/Navbar';
import Platform from '../Website/Platform';
import Services from '../Website/Services';
import Industries from '../Website/Industries';

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: "/contact",
      element: <div>
        <Navbar />
        <Contact />
      </div>
    },
    {
      path: "/platform",
      element: <div>
        <Navbar />
        <Platform/>
      </div>
    },
    {
      path:"/services",
      element: <div>
        <Navbar />
        <Services />
      </div>
    },
    {
      path:"/industries",
      element: <div>
        <Navbar />
        <Industries />
      </div>
    }
  ]
);

const Router = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default Router