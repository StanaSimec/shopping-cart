import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";
import Orders from "./components/order/orders";
import OrderForm from "./components/order/form/orderForm";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import Navbar from "./components/navbar/navbar";
import Error from "./components/error/error";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Provider store={store}>
                    <Error/>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/orders">
                        <Orders/>
                    </Route>
                    <Route path="/form">
                        <OrderForm/>
                    </Route>
                    <Route path="/" exact={true}>
                        <Shop/>
                    </Route>
                </Provider>
            </Switch>
        </Router>
    );
}

export default App;