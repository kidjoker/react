import React from "react";
import hero from "../img/Group 77.png"

export default function Hero() {
    return (
        <section>
            <img className="hero--pic" src={hero}></img>
            <h1 className="hero--header">Online Experiences</h1>
            <h3 className="hero--dec">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </section>
    )
}