import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/projetos",
        element: <Projetos />,
    },   
    {
        path: "/contato",
        element: <Contato />,
    },       

])

export default function RoutesApp() {
    return (
        <RouterProvider router={router} />
    )
}