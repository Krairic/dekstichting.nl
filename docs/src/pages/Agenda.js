import React from "react";
import agendaData from "../Data/AgendaData";

function AgendaCard() {
    return (
    agendaData.map(item => {
        return (
            <div className="agenda--wrapper">
            <div className="agenda--datum">{item.datum}</div>
            <div className="agenda--titel">{item.titel}</div>
            <div className="agenda--body">{item.body}</div>
            <div><img src={item.img} className="agenda--img" /></div>              
            </div>
        )
    })
    )
}


function Agenda() {
    return (
    <div id="agenda--masterWrapper">
    <AgendaCard />
    </div>
)}

export default Agenda