import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style.css"
import App from "./App/App";
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

let mask = document.querySelector(".mask");
window.addEventListener("load", ()=>{
  mask.classList.add("hideLoader");
  setTimeout(() => {
    mask.remove()
    }, 900)
  }
);
