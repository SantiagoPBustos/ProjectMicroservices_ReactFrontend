import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/Login.css";
import "../src/styles/Home.css";
import "../src/styles/Error404.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
