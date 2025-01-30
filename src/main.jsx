import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewsList from "./components/Updatess/News/NewsList.jsx";
import NewsArticle from "./components/Updatess/News/NewsArticle.jsx";
import About from "./pages/About.jsx";
import FAQs from "./pages/FAQs.jsx";
import PrivacyPolicies from "./pages/PrivacyPolicies.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import ActsAndRegulations from "./pages/ActsAndRegulations.jsx";



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
        path:"/news" ,
        element: <NewsList/>
      },
      {
        path:"/news/:title",
        element:<NewsArticle/>
      },
      {
        path:"/about-us",
        element:<About/>
      },
      {
        path:"/faqs",
        element:<FAQs/>
      },
      {
        path:"/privacy-policy",
        element:<PrivacyPolicies/>
      },
      {
        path:"/terms-and-conditions",
        element:<TermsAndConditions/>
      },
      {
        path:"/acts-regulations",
        element:<ActsAndRegulations/>
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
