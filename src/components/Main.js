import React from "react";
import artistData from "./Data.js";

function ArtistCard() {

    return (
        <p>
         {artistData.map(item => {
            return (
            <div className="artistcard">
            <p className="genre">{item.genre}</p>
            <h2 className="name">{item.name}</h2>
            <p className="instaHandle">{item.instaHandle}</p>
            <p className="link-wrapper"><a href={item.website} className="website">{item.website}</a></p>
            <img className="image" src={item.img} alt="helaas"></img>
            </div>
        )})}
        </p>
    )
}     

function Main() {

    return (
        <div>
         <ArtistCard />
        </div>
        
    )
}

export default Main