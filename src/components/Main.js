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
        

// function Joke() {
//     const array = [{name: "dicks",
//                     age: 6,
//                     motivation: "none"},
//                    {name: "chode",
//                     age: 99,
//                     motivation: "still none"},
//                     {name: "test",
//                     age: 88,
//                     motivation: "never"}]

//     return (
//         <p>
//         {array.map(item => {
//             return (
//                 <div>
//             <h1>{item.name}</h1>
//             <h2>{item.age}</h2>
//             <h3>{item.motivation}</h3>
//             </div>
//         )})}
        
//         </p>
//     )
// }

function Main() {

    return (
        <div>
         <ArtistCard />
        </div>
        
    )
}

export default Main