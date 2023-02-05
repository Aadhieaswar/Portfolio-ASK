import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="fixed-top">
                <div className="name">
                    <Link className="about-link" to="AboutMe" smooth={true} duration={300} offset={-100}>
                        Aadhieaswar Senthil Kumar
                    </Link>
                </div>
                <div className="ver-sep"></div>
                <a href={ process.env.PUBLIC_URL + "/Documents/ASKResume.pdf" } target="_blank" className="link-right" rel="noreferrer">
                    Resume
                </a>
                <div className="ver-sep"></div>
                <Link className="link-right" to="Experience" smooth={true} duration={300} offset={-100}>
                    Experience
                </Link>
                <div className="ver-sep"></div>
                <Link className="link-right" to="Projects" smooth={true} duration={300} offset={-100}>
                    Projects
                </Link>
            </nav>
        );
    }
}