import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";

import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap-reboot.scss";
import "@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css";

const router = createBrowserRouter([{ path: "*", element: <App /> }], {
  basename: "/remote",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
