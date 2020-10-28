import React from "react";

function ShopItem(props) {
    return (
        <div style={{margin: 30}}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.img} alt={'img' + props.name}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.name}</p>
                            <p className="subtitle is-6">Price: {props.price} Kč</p>
                            <button className="button is-primary" onClick={() => props.onClick()}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;