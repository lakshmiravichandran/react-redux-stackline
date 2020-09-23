import React, { Component } from 'react';
import logo from "../../images/stackline_logo.png";

export default class HeaderComponent extends Component {
    render () {
        return (
            <div id={"header"}>
                <img src={logo} alt={logo} width={"120px"} />
            </div>
        );
    }
}

