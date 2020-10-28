import React from "react";
import CartItem from "./cartItem";
import {connect} from "react-redux";
import {decreaseCountInCart, increaseCountInCart} from "../../redux/action";

function ConnectedCart(props) {
    const items = props.items.map(item => <CartItem name={item.name}
                                                    count={item.count}
                                                    price={item.price}
                                                    img={item.img}
                                                    key={'cart' + item.id}
                                                    increaseCountInCart={() => props.increaseCountInCart(item.id)}
                                                    decreaseCountInCart={() => props.decreaseCountInCart(item.id)}
        />
    );
    let total = 0;
    props.items.map(item => total += +item.count * +item.price.replace(/\s/g, ""));
    const totalView = total > 0 ? <h3 style={{marginTop: 10}} className="title is-4">Total: {total} Kč</h3> :
        <h3 className="has-text-centered title is-4">Cart is empty</h3>;
    return (
        <div className="container" style={{marginTop: 20}}>
            <div>{items}</div>
            <div>{totalView}</div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        items: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCountInCart: id => dispatch(increaseCountInCart(id)),
        decreaseCountInCart: id => dispatch(decreaseCountInCart(id))
    };
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(ConnectedCart);


export default Cart;