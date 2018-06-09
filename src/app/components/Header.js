import React from "react";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Logo</a>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.homeLink}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </nav>
    );
};