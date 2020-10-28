import {
    ADD_ORDER,
    ADD_TO_CART,
    DECREASE_COUNT_IN_CART,
    ERROR_CATCH,
    INCREASE_COUNT_IN_CART,
    ORDERS_LOAD,
    SHOP_LOAD
} from "../constants/action-types";
import axios from "axios";

export function getCartItems() {
    return function (dispatch) {
        return axios.get("api/items")
            .then(response => {
                dispatch({type: SHOP_LOAD, payload: response.data.items});
            })
            .catch(error => {
                dispatch({type: ERROR_CATCH, payload: error.message});
            })
    }
}

export function getOrders() {
    return function (dispatch) {
        return axios.get("api/orders")
            .then(response => {
                dispatch({type: ORDERS_LOAD, payload: response.data.orders});
            })
            .catch(error => {
                dispatch({type: ERROR_CATCH, payload: error.message});
            })
    }
}

export function postOrder(payload) {
    return function (dispatch) {
        return axios.post("api/orders", payload)
            .then(response => {
                dispatch({type: ADD_ORDER, payload: response.data.order})
            })
            .catch(error => {
                dispatch({type: ERROR_CATCH, payload: error.message});
            })
    }
}

export function addToCart(payload) {
    return {type: ADD_TO_CART, payload};
}

export function increaseCountInCart(payload) {
    return {type: INCREASE_COUNT_IN_CART, payload};
}

export function decreaseCountInCart(payload) {
    return {type: DECREASE_COUNT_IN_CART, payload};
}

export function addOrder(payload) {
    return {type: ADD_ORDER, payload};
}