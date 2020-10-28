import React from "react";

function OrderContact(props) {
    return (
        <div className="card" style={{marginTop: 20}}>
            <div className="card-content">
                <p className="title is-4">Contact</p>
                <div className="content">
                    <p>First name: {props.contact.firstName}</p>
                    <p>Last name: {props.contact.lastName}</p>
                    <p>Street: {props.contact.street}</p>
                    <p>City: {props.contact.city}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderContact;