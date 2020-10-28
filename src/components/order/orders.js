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
            <React.Fragment>
                <OrderItemList orders={this.props.orders}/>
            </React.Fragment>
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