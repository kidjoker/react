import React from "react";
import react from '../img/react.png'

export default function Header(props) {
    return (
        <header className="header">
            <img className='header-image' src={react}></img>
            <h2 className='header-title'>ReactFacts</h2>
            <p>Light</p>
            <input type="checkbox" id="switch" className="checkbox" onClick={props.toggleDarkMode}/>
            <label htmlFor="switch" className="toggle"/>
            <p>Dark</p>
        </header>
    )
};