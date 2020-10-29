import React from "react";

function OrderContact(props) {
    return (
        <div className="card" style={{marginTop: 10}}>
            <div className="card-content">
                <p className="title is-3">Contact:</p>
                <div className="content">
                    <p><span className="title is-5">First name:</span> {props.contact.firstName}</p>
                    <p><span className="title is-5">Last name:</span> {props.contact.lastName}</p>
                    <p><span className="title is-5">Street:</span> {props.contact.street}</p>
                    <p><span className="title is-5">City:</span> {props.contact.city}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderContact;