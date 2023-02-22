import React from "react";
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                {/* <Link className="active" to="/">Home</Link>
                <Link to="/todo">ToDo</Link> */}
                <NavLink to="/" activeClassname="active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassname="active">ToDo</NavLink>
            </div>
        )
    }
}

export default Nav;