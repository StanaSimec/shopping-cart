import React from "react";
import OrderCartItem from "./orderCartItem";

function OrderCart(props) {
    const items = props.items.map(item => <OrderCartItem name={item.name}
                                                         count={item.count}
                                                         price={item.price}
                                                         img={item.img}
                                                         key={'orderItem' + item.id}
        />
    );
    let total = 0;
    props.items.map(item => total += +item.count * +item.price.replace(/\s/g, ""));
    const view = props.items.length > 0 ? <p className="title is-4" style={{margin: 20}}>Total: {total} Kč</p>
        : <p className="title is-4" style={{margin: 20}}>Orders are empty</p>
    return (
        <React.Fragment>
            <div>
                {items}
                <React.Fragment>
                    {view}
                </React.Fragment>
            </div>
        </React.Fragment>
    );
}

export default OrderCart;