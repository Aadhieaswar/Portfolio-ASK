import React, { Component } from "react";
import './ContactLink.css';

export default class ContactLink extends Component {
    render() {
        return(
            <a className={"exp-btn " + this.props.expClass} href={this.props.link}>
                <div className="e-link-1">
                    {this.props.text}
                </div>
                <div className="icon-1">
                <i className={ "fa " + this.props.icon }></i>
                </div>
            </a>
        );
    }
}