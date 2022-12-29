import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Header from "./components/Header";
import Main from "./components/Main";
import "./images/Logo-transparant-white.png"
import TopImage from "./components/top-image";

ReactDOM.render(
    <TopImage />,
    document.getElementById("top-image")
)

ReactDOM.render(
    <Header />,
    document.getElementById("root")
)

ReactDOM.render(
    <Main />,
    document.getElementById("root2")
)