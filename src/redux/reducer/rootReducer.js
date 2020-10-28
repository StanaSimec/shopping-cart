import {
    ADD_ORDER,
    ADD_TO_CART,
    DECREASE_COUNT_IN_CART,
    ERROR_CATCH,
    INCREASE_COUNT_IN_CART,
    ORDERS_LOAD,
    SHOP_LOAD
} from "../constants/action-types";

const initialState = {
    items: [],
    cart: [],
    orders: [],
    errors: []
}

function rootReducer(state = initialState, action) {
    if (action.type === SHOP_LOAD) {
        return {...state, items: [...action.payload]};
    }
    if (action.type === ORDERS_LOAD) {
        return {...state, orders: [...action.payload]};
    }
    if (action.type === ERROR_CATCH) {
        return {...state, errors: state.errors.concat(action.payload)};
    }
    if (action.type === ADD_TO_CART) {
        const id = action.payload;
        const currentIndex = state.cart.findIndex(item => item.id === id);
        if (currentIndex >= 0) {
            return state;
        }
        let item = state.items.find(item => item.id === id);
        const newItem = {...item, count: 1};
        return {...state, cart: state.cart.concat(newItem)};
    }
    if (action.type === INCREASE_COUNT_IN_CART) {
        let cart = [...state.cart];
        const currentIndex = cart.findIndex(item => item.id === action.payload);
        cart[currentIndex] = {...cart[currentIndex], count: cart[currentIndex].count + 1};
        return {...state, cart: cart};
    }
    if (action.type === DECREASE_COUNT_IN_CART) {
        const id = action.payload;
        let cart = [...state.cart];
        const currentIndex = cart.findIndex(item => item.id === id);
        const count = cart[currentIndex].count - 1;
        if (count <= 0) {
            cart = cart.filter(item => item.id !== id);
        } else {
            cart[currentIndex] = {...cart[currentIndex], count: count};
        }
        return {...state, cart: cart};
    }
    if (action.type === ADD_ORDER) {
        return {
            ...state,
            cart: [],
            orders: state.orders.concat({
                contact: {...action.payload},
                items: [...state.cart],
            })
        }
    }
    return state;
}

export default rootReducer;