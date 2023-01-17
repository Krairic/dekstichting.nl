import React from "react";
import "./styles/style.css"
import "./styles/header-style.css"
import Header from "./components/Header";
import Main from "./components/Main";
import "./images/Logo-transparant-white.png"
import TopImage from "./components/top-image";

export default function App() {
    return (
        <div className="global-wrapper">
        <TopImage />
        <Header />
        <Main />
        </div>
    )
}