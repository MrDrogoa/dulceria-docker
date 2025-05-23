import React from "react";
import { createRoot } from "react-dom/client"; // update import
import "./index.css";
import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
