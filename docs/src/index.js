import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js"
import "./images/Logo-transparant-white.png"
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
    <BrowserRouter basename="/build">
    <App />
    </BrowserRouter>,
    document.getElementById("root"))