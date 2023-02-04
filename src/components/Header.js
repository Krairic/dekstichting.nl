import React from "react";
import logo from "../images/Logo-transparant-lightblue.png"
import { Link } from "react-router-dom";
import artistData from "../Data/ArtistData"
import { HashLink } from "react-router-hash-link";

function Header() {

    
    return (
        <div id="nav-container">
            <div id="top-image-container">
            </div>
            <nav id="nav">
                <div id="header--wrapper">
                <header id="header">
                    <Link to="/"><img src={logo} alt="logo" id="logo" /></Link>
                    <Link to="/"><h1 id="title">DeKStichting</h1></Link>
                    <h4>
                        <ul id="menu">
                            <li><Link to="/">De K Stichting</Link></li>
                            <li><Link to="/agenda">Agenda</Link></li>
                            <li><Link to="/residentie">Residentie de Rooie Haen</Link></li>      
                                <div id="dropdown">
                                <button id="button"><li id="header--listArchief"><Link to="/archief">Archief</Link></li></button>
                                <div id="dropdown-content">
                                {artistData.map(item => {
                                    return (
                                        
                                        <HashLink to={"/archief#"+ item.id}> <p id="header--artistLink">{item.name}</p></HashLink>
                                        
                                    )
                                })}
                                </div>
                                </div>
                            <li><Link to="/kontakt">Kontakt</Link></li>
                        </ul>
                    </h4>
                </header>
                </div>
            </nav>
        </div>
    )
}

export default Header