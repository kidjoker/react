import React from "react";
import button1 from "../img/button1.png"
import button2 from "../img/button2.png"

export default function MainContent() {
    return (
        <div className="Content">
            <p className="Name">Laura Smith</p>
            <p className="JobTitle">Frontend Developer</p>
            <p className="Company">laurasmith.website</p>
            <div className="Contact">
                <img src={button1}></img>
                <img src={button2}></img>
            </div>
            <div className="Description">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}