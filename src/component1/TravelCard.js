import React from "react";
import location from "../img/location.png"

export default function TravelCard(props) {
    return (
        <div className="travelCard">
            <img className="destination-image" src={props.travel.image}></img>
            <div lassName="destination-desc">
                <div className="location">
                    <img className="location-icon" src={location}></img>
                    <p className="location-name">{props.travel.location}</p>
                    <p className="maps-link">View on Google Maps</p>
                </div>
                <p className="spot-name">{props.travel.name}</p>
                <p className="view-date">{props.travel.date}</p>
                <p className="spot-desc">{props.travel.description}</p>
            </div>
		</div>
    )
}
