import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter } from "react-router-dom";
import { About } from "./features/About";
import { Dogs } from "./features/Dogs";
import { Cats } from "./features/Cats/Cats";
import App from "./App";
import "./index.css";

export const router = createHashRouter([
  {
    path: "/dogs",
    element: <Dogs />,
  },
  {
    path: "/cats",
    element: <Cats />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Dogs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
