import React from 'react';
import ReactDOM from 'react-dom';

function ContactCard(props){
    return(
    <div>
        <img src={props.contact.imgurl} />
        <p>{props.contact.name}</p>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
    </div>
    )
}


export default ContactCard;