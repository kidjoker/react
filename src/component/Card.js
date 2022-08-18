import React from "react";
import star from "../img/Star.png";

export default function Card(props) {
    console.log(props.openSpots);
    return (
        <div className="card">
            {props.hero.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img className="profile-image" src={props.hero.people}></img>
            <div className="card--stats">
                <img className="card--star" src={star}></img>
                <span>5.0</span>
                <span className="gray">({props.hero.total}) • </span>
                <span className="gray">{props.hero.country}</span>
            </div>
            <p>{props.description}</p>
            <p><span className="bold">From ${props.hero.price}</span> / person</p>
        </div>
    )
}