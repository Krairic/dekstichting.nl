import React from "react";
import "./styles/header.css"
import "./styles/home.css"
import "./styles/agenda.css"
import "./styles/archief.css"
import "./styles/residentie.css"
import Header from "./components/Header";
import "./images/Logo-transparant-white.png"
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Agenda from "./pages/Agenda";
import Archief from "./pages/Archief";
import Residentie from "./pages/Residentie";
import Home from "./pages/Home";

export default function App() {
    return (
        <div className="global-wrapper">
        <Header /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/residentie" element={<Residentie />} />
            <Route path="/archief" element={<Archief />} />
            <Route path='/kontakt' element={<Contact />} />
        </Routes>
        </div>
    )
}

