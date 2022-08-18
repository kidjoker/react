import React from "react";
import Twitter from "../img/Twitter.png"
import Facebook from "../img/Facebook.png"
import Github from "../img/Github.png"
import Instagram from "../img/Instagram.png"

export default function BottomBar() {
    return (
        <div className="BottomBar">
            <img src={Twitter}></img>
            <img src={Facebook}></img>
            <img src={Github}></img>
            <img src={Instagram}></img>
        </div>
    )
};