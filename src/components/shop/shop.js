import React from "react";
import ShopItem from "./shopItem";
import {connect} from "react-redux";
import {addToCart, getCartItems} from "../../redux/action";

class ConnectedShop extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        const
            items = this.props.items.map(item => <ShopItem name={item.name}
                                                           price={item.price}
                                                           key={item.id}
                                                           img={item.img}
                                                           onClick={() => this.props.addToCart(item.id)}
                />
            );

        return (
            <div className="container">
                <div>{items}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {items: state.items}
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        getData: () => dispatch(getCartItems())
    }
}

const Shop = connect(mapStateToProps, mapDispatchToProps)(ConnectedShop);

export default Shop;