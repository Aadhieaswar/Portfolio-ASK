import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        return (
                <div className="card-2">
                    <h4>{this.props.title}</h4>
                    <div>
                        {this.props.content}
                    </div>
                </div>
        );
    }
}