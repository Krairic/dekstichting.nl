import React from "react";


function Joke() {
    const array = [{name: "dicks",
                    age: 6,
                    motivation: "none"},
                   {name: "chode",
                    age: 99,
                    motivation: "still none"},
                    {name: "test",
                    age: 88,
                    motivation: "never"}]

    return (
        <p>
        {array.map(function(item) {
            return (
                <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
            <h3>{item.motivation}</h3>
            </div>
        )})}
        
        </p>
    )
}

function Main() {

    return (
        <div>
         <Joke />
        </div>
        
    )
}

export default Main