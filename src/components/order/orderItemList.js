import React from "react";
import OrderItem from "./orderItem";

function OrderItemList(props) {
    let view;
    if (props.orders.length) {
        const items = props.orders.map(item => <OrderItem contact={item.contact}
                                                          items={item.items}
                                                          key={'order_' + item.id}
            />
        );
        view =
            <React.Fragment>
                {items}
            </React.Fragment>;

    } else {
        view = <h3 className="has-text-centered title is-4">No orders saved</h3>;
    }
    return (
        <React.Fragment>
            {view}
        </React.Fragment>
    );
}

export default OrderItemList;