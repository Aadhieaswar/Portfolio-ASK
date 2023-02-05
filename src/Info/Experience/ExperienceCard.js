import React, { Component } from "react";

export default class ExperienceCard extends Component {
    render() {
        return (
            <li className="card exp-card">
                <h4>{this.props.company}</h4>
                <img
                    src={process.env.PUBLIC_URL + this.props.imageURL}
                    width="125"
                    className="company-img" 
                    alt={this.props.imageALT}
                /><br /><br />
                <div className="exp-details">
                    <em><i>Position</i> {this.props.position}</em><br /><br />
                    <i>Technology</i>
                    <ul className="tags">
                        {this.props.technology?.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <div className="exp-description">
                        <i>Description</i><br />
                        <ul>
                            {this.props.description?.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}