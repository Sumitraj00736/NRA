import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TermsOfServices from "./pages/TermsOfServices.jsx";
import Policy from "./pages/Policy.jsx";
import { EventProvider } from "./EventProvider.jsx";
import EventsDetails from "./pages/EventsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "terms-of-services",
        element: <TermsOfServices />,
      },
      {
        path: "privacy-policy",
        element: <Policy />,
      },
      {
        path: "events/:id",
        element: <EventsDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventProvider>
      <RouterProvider router={router} />
    </EventProvider>
  </React.StrictMode>
);
