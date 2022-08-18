import React from "react";
import image from './img/react.png'

export default function Header() {
    return (
        <nav className="nav">
            <img src={image}></img>
            <h3>ReactFacts</h3>
            <h4>React Courses - Project 1</h4>
        </nav>
    )
};