import React from "react";
import {connect} from "react-redux";
import {postOrder} from "../../../redux/action";
import {useForm} from "react-hook-form";

function ConnectedOrderForm(props) {

    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onBlur"
    });

    function onSubmit(data, e) {
        const order = {
            contact: {...data},
            items: [...props.cart]
        };
        props.postOrder(order);
        e.target.reset();
    }

    return (
        <div className="container" style={{margin: 20}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label" htmlFor="firstName">First Name:</label>
                    <div className="control">
                        <input className="input"
                               name="firstName"
                               id="firstName"
                               type="text"
                               ref={register({
                                   required: true,
                                   minLength: 2,
                                   maxLength: 20
                               })}
                               style={{borderColor: errors.firstName && "red"}}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="lastName">Last Name:</label>
                    <div className="control">
                        <input className="input"
                               name="lastName"
                               id="lastName"
                               type="text"
                               ref={register({
                                   required: true,
                                   minLength: 2,
                                   maxLength: 20
                               })}
                               style={{borderColor: errors.lastName && "red"}}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="street">Street:</label>
                    <div className="control">
                        <input className="input"
                               name="street"
                               id="street"
                               type="text"
                               ref={register({
                                   required: true,
                                   minLength: 2,
                                   maxLength: 20
                               })}
                               style={{borderColor: errors.street && "red"}}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="city">City:</label>
                    <div className="control">
                        <input className="input"
                               name="city"
                               id="city"
                               type="text"
                               ref={register({
                                   required: true,
                                   minLength: 2,
                                   maxLength: 20
                               })}
                               style={{borderColor: errors.city && "red"}}
                        />
                    </div>
                </div>
                <div className="control">
                    <input type="submit" className="button is-link" disabled={formState.isSubmitting} value="Order"/>
                </div>
            </form>
        </div>
    );
}

function mapStateToProps(state) {
    return {cart: state.cart};
}

function mapDispatchToProps(dispatch) {
    return {
        postOrder: contact => dispatch(postOrder(contact))
    };
}

const OrderForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrderForm);

export default OrderForm;