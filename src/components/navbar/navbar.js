import React from "react";
import {Link} from "react-router-dom";

function Navbar(props) {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_1280.png" width="28"
                         height="28"/>
                </a>

                <a role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="navbarBasicExample" onClick={() => {
                    setIsActive(!isActive);
                }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">Shop</Link>
                    <Link className="navbar-item" to="/cart">Cart</Link>
                    <Link className="navbar-item" to="/form">Finish order</Link>
                    <Link className="navbar-item" to="/orders">Your orders</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;