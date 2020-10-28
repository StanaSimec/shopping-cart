import React from "react";
import OrderContact from "./orderContact";
import OrderCart from "./orderCart";

function OrderItem(props) {
    return (
        <div className="card" style={{margin: 20}}>
            <div className="card-content">
                <OrderContact contact={props.contact}/>
                <OrderCart items={props.items}/>
            </div>
        </div>
    );
}

export default OrderItem;