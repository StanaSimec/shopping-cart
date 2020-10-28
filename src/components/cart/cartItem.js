import React from "react";

function CartItem(props) {
    const total = +props.count * +props.price.replace(/\s/g, "");
    return (
        <div className="card" style={{marginTop: 20}}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={props.img} alt={props.name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">Price: {props.count} x {props.price} = {total} Kč</p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <button onClick={() => props.increaseCountInCart()} className="button is-success card-footer-item">Add</button>
                <button onClick={() => props.decreaseCountInCart()} className="button is-danger card-footer-item">Remove</button>
            </footer>
        </div>
    );
}

export default CartItem;