import React from "react";
import gemeenteLogo from "../images/gemeentelogos/zwart_geel/zwart_geel.png"
import mondriaanFondsLogo from "../images/mondriaanfondslogos/MFO_LOGO_RGB_ROOD_SMALL.png"


function Home() {
    return (
    <div className="home--wrapper">
    <div className="home--introtekst">
    <h3>Waar we voor staan</h3>
    <p>
De K Stichting organiseert culturele evenementen met een aantal doelen: <br /><br />


Hun kunstenaars eerlijk betalen.<br />
Bijdragen aan de professionalisering van hun kunstenaars.<br />
Evenementen opzetten die kwaliteit waarborgen.<br />
Indien nodig buiten de gebaande paden een weg vinden.<br /><br />

We opereren in 's-Hertogenbosch en omstreken, maar houden ons net wijd.
    </p>
    <br />
    <br />
    <br />
    <br />

    <div className="home--footer">
        <h5>Met dank aan:</h5>
        <img className="home--logo" src={gemeenteLogo}></img>
        <img className="home--logo" src={mondriaanFondsLogo}></img>
    </div>
    </div>
    
        


    </div>
)}

export default Home