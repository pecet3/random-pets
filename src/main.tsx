import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Input } from "./common/Input";
import { Provider } from "react-redux";
import { Dogs } from "./features/Dogs";
import { Cats } from "./features/Cats";
import store from "./store";
import App from "./App";
import "./index.css";
import { Sidebar } from "./common/Sidebar";

export const router = createBrowserRouter([
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
  {
    path: "/",
    element: <Dogs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
