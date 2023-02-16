import React from "react";
import artistData from "../Data/ArtistData.js";
import { HashLink } from "react-router-hash-link"

function ArtistCard() {
    


    return (
        <div id="residentie--wrapper">
        <div id="residentie--introWrapper">
        <h3>Artist in residency De Rooie Haen</h3>
        <p>In 2019 zijn wij een samenwerking aangegaan met Sjoerd Haens, de kastelijn van cafe De Rooie Haen in centrum Den Bosch.<br />
         Hier plaatsen wij ieder jaar vier residenten voor een werkperiode en presentatie periode.<br />
        De residentie is uniek door de plaatsing pal tussen de keuken en bar van het cafe, waar de resident werkt terwijl het cafe open is. <br />
        Dit zorgt voor interessante situaties voor zowel de kunstenaar en de bezoeker. Wilt u eens komen kijken tijdens een werkperiode?<br />
        Houd dan onze agenda en onze instagram (@air.rooie.haen) in de gaten voor de actuele informatie.
        <br /><br />
        Hieronder volgt een lijst van elke resident van meest naar minst huidig met hun instagram en website, <br />
        samen met een enkel werk dat tijdens de residentie gemaakt is.
        Voor interesse in de residentie, stuur ons een bericht op info@dekstichting.nl, <br />
        voor interesse in een van onze residenten raden we u aan contact met hen op te nemen via onderstaande informatie.</p>
        </div>
        <br />
        <br />
        <h1 id="residentie--years">2019 - 2022</h1>
        <p id="residentie--artistCardWrapper">
         {artistData.map(item => {
            return (
            <div className="artistcard">
            <div id={item.id}></div>
            <HashLink to={"/archief#" + item.id}>
            <p className="genre">{item.genre}</p>
            <h2 className="name">{item.name}</h2>
            <p className="instaHandle">{item.instaHandle}</p></HashLink>
            <p className="link-wrapper"><a href={item.website} className="website">{item.website}</a></p>
            <img className="image" src={item.img} alt="helaas"></img>
            {item.img2 && <img className="image" src={item.img2} alt="helaas"></img>}
            </div>
            
        )})}
        </p>
        </div>
    )
}     

function Residentie() {

    return (
        <div>
         <ArtistCard />
        </div>
        
    )
}

export default Residentie