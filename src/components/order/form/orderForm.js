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
        <div className="columns is-centered">
            <div className="column is-half">
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
                                {errors.firstName && errors.firstName.type === "required" &&
                                <span className="help is-danger">This field is required</span>}
                                {errors.firstName && errors.firstName.type === "maxLength" &&
                                <span className="help is-danger">Max length exceeded</span>}
                                {errors.firstName && errors.firstName.type === "minLength" &&
                                <span className="help is-danger">Min length not exceeded</span>}
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
                                {errors.lastName && errors.lastName.type === "required" &&
                                <span className="help is-danger">This field is required</span>}
                                {errors.lastName && errors.lastName.type === "maxLength" &&
                                <span className="help is-danger">Max length exceeded</span>}
                                {errors.lastName && errors.lastName.type === "minLength" &&
                                <span className="help is-danger">Min length not exceeded</span>}
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
                                {errors.street && errors.street.type === "required" &&
                                <span className="help is-danger">This field is required</span>}
                                {errors.street && errors.street.type === "maxLength" &&
                                <span className="help is-danger">Max length exceeded</span>}
                                {errors.street && errors.street.type === "minLength" &&
                                <span className="help is-danger">Min length not exceeded</span>}
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
                                {errors.city && errors.city.type === "required" &&
                                <span className="help is-danger">This field is required</span>}
                                {errors.city && errors.city.type === "maxLength" &&
                                <span className="help is-danger">Max length exceeded</span>}
                                {errors.city && errors.city.type === "minLength" &&
                                <span className="help is-danger">Min length not exceeded</span>}
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox"
                                           name="terms"
                                           ref={register({
                                               required: true,
                                           })}
                                           style={{marginRight: 5}}
                                    />
                                    I agree to the <a href="#">terms and conditions</a>
                                </label>
                                {errors.terms && errors.terms.type === "required" &&
                                <span className="help is-danger">Terms and conditions must be approved</span>}
                            </div>
                        </div>
                        <div className="control">
                            <input type="submit" className="button is-link" disabled={formState.isSubmitting}
                                   value="Order"/>
                        </div>
                    </form>
                </div>
            </div>
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