import React from "react";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/aboutUs/AboutUs";
import Feedback from "./Components/Feedback/Feedback";
import PlansandPricing from "./Components/Plans & Pricing/PlansandPricing";
import Transformations from "./Components/Transformations/Transformations";
import { ReactDOM } from "react";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "Feedback", element: <Feedback /> },
      { path: "PlansandPricing", element: <PlansandPricing /> },
      { path: "Transformations", element: <Transformations /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
