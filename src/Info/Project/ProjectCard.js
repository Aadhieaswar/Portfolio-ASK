import React, { Component } from 'react';
import { Image } from 'antd';
import './ProjectCard.css';

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPreview: false
        }
    }

    render() {
        return (
            <li className="card">
                <h4>{this.props.title}</h4>
                <Image
                    className="project-image"
                    src={process.env.PUBLIC_URL + this.props.imageURL}
                    alt={this.props.imageALT}
                    height={200}
                />
                <div className="description">
                    {this.props.description}
                    <br />
                </div>
                <hr />
                <ul className="tags">
                    {this.props.tags.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <a className="repo-link" href={this.props.repoLink}>Github Repo</a>
            </li>
        );
    }
}