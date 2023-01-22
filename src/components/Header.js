import React from "react";
import logo from "../images/Logo-transparant-white.png"
import { Link } from "react-router-dom";
import artistData from "../Data/ArtistData"

function Header() {
    return (
        <div id="nav-container">
            <nav id="nav">
                <header id="header">
                    <Link to="/"><img src={logo} alt="logo" id="logo" /></Link>
                    <Link to="/"><h1 id="title">DeKStichting</h1></Link>
                    <h4>
                        <ul id="menu">
                            <li><Link to="/">De K Stichting</Link></li>
                            <li><Link to="/agenda">Agenda</Link></li>
                            
                                <div id="dropdown">

                                <button id="button"><Link to="/residentie">Residentie de Rooie Haen</Link></button>
                                <div id="dropdown-content">
                                {artistData.map(item => {
                                    return (
                                        
                                        <Link to="/archief"><p id="header--artistLink">{item.name}</p></Link>
                                        
                                    )
                                })}
                                </div>
                                {/* <div id="dropdown-content">
                                    <p id="header--artistLink">{artistData[0].name}</p>
                                    <p id="header--artistLink">{artistData[1].name}</p>
                                    <p id="header--artistLink">{artistData[2].name}</p>
                                    <p id="header--artistLink">{artistData[3].name}</p>
                                </div> */}

                                </div>
                                
                            
                            <li><Link to="/archief">Archief</Link></li>
                            <li><Link to="/contact">Kontakt</Link></li>
                        </ul>
                    </h4>
                </header>
            </nav>
        </div>
    )
}

export default Header