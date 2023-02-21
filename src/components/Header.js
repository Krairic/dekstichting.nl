import React from "react";
import logo from "../images/Logo-transparant-lightblue.png"
import { Link } from "react-router-dom";
import artistData from "../Data/ArtistData"
import { HashLink } from "react-router-hash-link";

function Header() {

let [openMob, setOpenMob] = React.useState(false)

function openMobMenu() {
    setOpenMob(prevOpenMob => !prevOpenMob)
}

    return (
        <div id="nav-container">
            <div id="top-image-container">
            </div>
            <nav id="nav">
                <div id="header--wrapper">
                <header id="header">
                    <button className="header--hamburgerButton" onClick={openMobMenu}>
                    <svg viewBox="0 0 100 100" width="50px" className="header--hamburger">
                        <rect className="hamburger1" 
                        width="80" height="10" 
                        x="10"
                        y="15" 
                        rx="2"></rect>
                        <rect className="hamburger2" 
                        width="80" height="10" 
                        x="10"
                        y="45" 
                        rx="2"></rect>
                        <rect className="hamburger3" 
                        width="80" height="10" 
                        x="10"
                        y="75" 
                        rx="2"></rect>
                    </svg>
                    </button>
                    <Link to="/"><img src={logo} alt="logo" id="logo" /></Link>
                    <Link to="/"><h1 id="title">DeKStichting</h1></Link>
                    
                        <ul id="menu">
                        <li id="header--listLink"><Link to="/">De K Stichting</Link></li>
                            <li id="header--listLink"><Link to="/agenda">Agenda</Link></li>
                            <li id="header--listLink"><Link to="/residentie">Residentie de Rooie Haen</Link></li>      
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
                            <li id="header--listLink"><Link to="/kontakt">Kontakt</Link></li>
                        </ul>
                    {openMob===true && <div className="header--mobMenu">
                        <ul className="header--mobMenuWrapper">
                            <li id="header--listLink"><Link to="/">De K Stichting</Link></li>
                            <li id="header--listLink"><Link to="/agenda">Agenda</Link></li>
                            <li id="header--listLink"><Link to="/residentie">Residentie de Rooie Haen</Link></li>
                            <li id="header--listArchief"><Link to="/archief">Archief</Link></li>
                            <li id="header--listLink"><Link to="/kontakt">Kontakt</Link></li>
                        </ul>
                    </div>}
                </header>
                </div>
            </nav>
        </div>
    )
}

export default Header