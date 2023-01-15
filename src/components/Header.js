import React from "react";
import logo from "../images/Logo-transparant-white.png"
// import ReactDOM from "react";

function Header() {
    return (
        <div id="nav-container">
            <nav id="nav">
                <header id="header">
                    <img src={logo} alt="logo" id="logo" />
                    <h1 id="title">DeKStichting</h1>
                    <h4>
                        <ul id="menu">
                            <li>De K Stichting</li>
                            <li>Agenda</li>
                            
                                <div id="dropdown">

                                <button id="button">Residentie de Rooie Haen</button>
                               

                                <div id="dropdown-content">
                                <a href="resident1">ala</a>
                                <a href="resident2">mala</a>
                                <a href="resident3">bims</a>
                                </div>

                                </div>
                                
                            
                            <li>Archief</li>
                            <li>Kontakt</li>
                        </ul>
                    </h4>
                </header>
            </nav>
        </div>
    )
}

export default Header