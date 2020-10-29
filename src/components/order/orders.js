import React from "react";
import OrderItemList from "./orderItemList";
import {connect} from "react-redux";
import {getOrders} from "../../redux/action";

class ConnectedOrders extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        return (
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className="container">
                        <OrderItemList orders={this.props.orders}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {orders: state.orders};
}

function mapDispatchToProps(dispatch) {
    return {
        getOrders: () => dispatch(getOrders())
    }
}

const Orders = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrders);

export default Orders;