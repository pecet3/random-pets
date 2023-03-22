import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Input } from "./common/Input";

import { Dogs } from "./features/Dogs";
import { Cats } from "./features/Cats";
import App from "./App";
import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dogs />,
  },
  {
    path: "/dogs",
    element: <Dogs />,
  },
  {
    path: "/cats",
    element: <Cats />,
  },
  {
    path: "/input",
    element: <Input />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
