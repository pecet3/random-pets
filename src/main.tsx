import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./common/Header";
import { Sidebar } from "./common/Sidebar";
import { Dogs } from "./features/Dogs";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dogs",
    element: <Dogs />,
  },
  {
    path: "/header",
    element: <Header title={"pieski"} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
