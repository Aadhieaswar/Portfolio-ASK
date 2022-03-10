import React, { Component } from 'react';
import './AboutMe.css';
import Card from './Card';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me" id="AboutMe">
                <h1>About me</h1>
                <div className="para bio-container">
                    <img src={ process.env.PUBLIC_URL + "/Images/profile.png" } width="260" height="200" alt="Aadhieaswar Senthil Kumar" />
                    <ul className="bio">
                        <li>Age: <span>20</span></li>
                        <li>Gender: <span>Male</span></li>
                        <li>DOB: <span>Oct 26<sup>th</sup> 2001</span></li>
                    </ul>
                </div>
                <div className="content">
                    <Card
                        title="Education"
                        content={
                            <>
                                <img src={ process.env.PUBLIC_URL + "/Images/western-uni.png" } width="250" alt="Western University" />
                                <br />
                                I am currently in my Third Year at Western University Majoring in Software Engineering.
                            </>
                        }
                    />

                    <Card 
                        title="Programming Knowledge"
                        content={
                            <div className="logos-container">
                                <h5>
                                    Object Oriented Programming
                                </h5>
                                <br />
                                <img src={ process.env.PUBLIC_URL + "/Images/java.png" } width="125" className="lang-img" alt="Java" />
                                <img src={ process.env.PUBLIC_URL + "/Images/python.png" } width="125" className="lang-img" alt="Python" />
                                <br /><br />
                                <hr />
                                <h5 style={{ paddingTop: 15 }} >
                                    Object Based Programming
                                </h5>
                                <br />
                                <img src={ process.env.PUBLIC_URL + "/Images/javascript-1.png" } width="100" className="lang-img" alt="JavaScript" />
                                <br /><br />
                                <hr />
                                <h5 style={{ paddingTop: 15 }} >
                                    Others
                                </h5>
                                <br />
                                <img src={ process.env.PUBLIC_URL + "/Images/html-css.png" } width="150" className="lang-img" alt="HTML and CSS" />
                            </div>
                        }
                    />

                    <Card 
                        title="Frameworks and Databases"
                        content={
                            <div className="logos-container">
                                <h5>
                                    Python Frameworks (Web Development)
                                </h5>
                                <br />
                                <img src={ process.env.PUBLIC_URL + "/Images/django.jpg" } width="100" className="lang-img" alt="Django" />
                                <img src={ process.env.PUBLIC_URL + "/Images/flask.png" } width="100" className="lang-img" alt="Flask" />
                                <br /><br />
                                <hr />
                                <h5 style={{ paddingTop: 15 }} >
                                    JavaScript Frameworks/Libraries
                                </h5>
                                <br />
                                <img src={ process.env.PUBLIC_URL + "/Images/javascript.png" } width="150" className="lang-img" alt="Node" />
                                <img src={ process.env.PUBLIC_URL + "/Images/react.png" } width="100" className="lang-img" alt="React" />
                                <img src={ process.env.PUBLIC_URL + "/Images/react-native.png" } width="100" className="lang-img" alt="React Native" />
                                <br /><br />
                                <hr />
                                <h5 style={{ paddingTop: 15 }} >
                                    SQL DataBases
                                </h5>
                                <br />
                                <img src={ process.env.PUBLIC_URL + "/Images/psql.png" } width="100" className="lang-img" alt="React Native" />
                                <img src={ process.env.PUBLIC_URL + "/Images/sqlite3.png" } width="100" className="lang-img" alt="Sqlite3" />
                                <br /><br />
                            </div>
                        }
                    />
                </div>
            </div>
        );
    }
}