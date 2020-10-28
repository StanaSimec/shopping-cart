import React from "react";
import {connect} from "react-redux";

function ConnectedError(props) {
    let view = '';
    if (props.errors.length) {
        let errors = props.errors.map((error, counter) => <p key={error + counter}>{error}</p>);
        view =
            <div className="notification is-danger" style={{margin: 15}}>
                {errors}
            </div>;
    }
    return (
        <React.Fragment>
            {view}
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {errors: state.errors};
}

const Error = connect(mapStateToProps)(ConnectedError);

export default Error;