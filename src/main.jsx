import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegistrationContainer } from "./components/pages/RegistrationContainer.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationContainer />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
