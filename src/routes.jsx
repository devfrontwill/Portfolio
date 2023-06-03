import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Testmonials from './pages/Testimonials';
import RecentWork from './pages/RecentWork';
import GetInTouch from './pages/GetInTouch';
import Error from "./pages/Error/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/casestudies",
        element: <CaseStudies />,
    },
    {
        path: "/testmonials",
        element: <Testmonials />,
    },
    {
        path: "/recentwork",
        element: <RecentWork />,
    },
    {
        path: "/getintouch",
        element: <GetInTouch />,
    },       

])

export default function RoutesApp() {
    return (
        <RouterProvider router={router} />
    )
}