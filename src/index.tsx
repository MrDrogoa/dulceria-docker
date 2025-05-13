import React from "react"; // esto es para crear componentes react
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
