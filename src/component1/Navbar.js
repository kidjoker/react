import React from "react";
import travel_logo from "../img/travelLogo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="travel--logo" src={travel_logo}></img>
            <p className="travel--title" >my travel journal.</p>
        </nav>
    )
}