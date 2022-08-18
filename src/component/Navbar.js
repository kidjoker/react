import React from "react";
import airbnb_logo from "../img/airbnb1.png"

export default function Navbar() {
    return (
        <nav>
            <img className="airbnb--logo" src={airbnb_logo}></img>
        </nav>
    )
}