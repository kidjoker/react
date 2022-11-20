import React from "react";
import profile_img from "../img/Rectangle.png"
import starEmpty from "../img/star empty.png"
import starFilled from "../img/star filled.png"

export default function profile() {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        Phone: "+1 (719) 555-1212",
        email: "superherojoke@gmail.com",
        favourite: true
    })

    function toggleFavourite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                favourite: !contact.favourite
            }
        });
    }

    let starIcon = contact.favourite ? starFilled : starEmpty;

    return (
        <article className="card">
            <img className="card-profile" src={profile_img} />
            <div className="card-info">
                <img className="card-favourite" src={starIcon} onClick={toggleFavourite} />
                <h2 className="card-name">{contact.firstName} {contact.lastName}</h2>
                <p className="card-contact">{contact.Phone}</p>
                <p className="card-email">{contact.email}</p>
            </div>
        </article>
    )
};
