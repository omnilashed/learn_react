import React from "react";

function ContactItemImage ({imageURL}){
    return (
        <div className="contact-item__image">
            <img src={imageURL} alt="avatar contact"/>
        </div>
    );
}

export default ContactItemImage;