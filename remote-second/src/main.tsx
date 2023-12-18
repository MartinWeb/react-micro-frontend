import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap-reboot.scss";
import "@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
