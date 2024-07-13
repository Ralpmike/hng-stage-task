import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import CheckoutPage from "./routes/CheckoutPage";
import ProductDetails from "./routes/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/productsdetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
