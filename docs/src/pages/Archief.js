import React from "react";
import archiefData from "../Data/ArchiefData";


function Archief() {

    return (
            <div>
                <div id="archief--expoZWVWrapper">
                    <h3 id="archief--title">Expositie Zuid-Willemsvaart 2021</h3>
                    <p id="archief--genre">Met werken van Jesse Fischer, Cas van Deurssen, Jos Merkx en Pjotr van Leeuwen</p>
                    <img className="expo-image" src="http://in02.hostcontrol.com/resources/f04f197f11fc63/a4382add48.JPEG"></img>
                    <img className="expo-image" src="http://in02.hostcontrol.com/resources/f04f197f11fc63/49833fd574.JPEG"></img><br />
                    <img className="expo-image" src="http://in02.hostcontrol.com/resources/f04f197f11fc63/ae7713d643.JPEG"></img>
                    <img className="expo-image" src="http://in02.hostcontrol.com/resources/f04f197f11fc63/7fc0ca1e14.JPEG"></img>
                </div>
                {archiefData.map (item =>{
                    return (
                        <div id="archief--wrapper">
                            <div id={item.id}></div>
                            <div id="archief--name">{item.name}</div>
                            <div id="archief--genre">{item.genre}</div>
                            <div id="archief--instaHandle">{item.instaHandle}</div>
                            <div id="archief--website">{item.website}</div><br />
                            <img className="image" src={item.img} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img2} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img3} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img4} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img5} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img6} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img7} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img8} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img9} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img10} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img11} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img12} />
                            {/* <div>{item.description}</div> */}

                            <img className="image" src={item.img13} />
                            {/* <div>{item.description}</div> */}
                        </div>
                    )})}
            </div>
        )
        
}

export default Archief