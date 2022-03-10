import React, { Component } from "react";
import './Contact.css';
import ContactLink from "./ContactLink";

export default class Contact extends Component {
    render() {
        return(
            <div className="contact-me">
                <h1>Contact Me</h1>
                <div className="contact-box">
                    <ContactLink
                        link="tel:519-851-0552"
                        text="+1 (519)-851-0552"
                        icon="fa-phone"
                    />
                    <ContactLink
                        expClass="e-2"
                        link="mailto:aadhieaswar@gmail.com"
                        text="aadhieaswar@gmail.com"
                        icon="fa-envelope"
                    />
                    <ContactLink
                        expClass="e-3"
                        link="https://github.com/Aadhieaswar"
                        text="GitHub"
                        icon="fa-github"
                    />
                    <ContactLink
                        expClass="e-4"
                        link="https://www.linkedin.com/in/aadhieaswar-senthil-kumar-7bb830188/"
                        text="LinkedIn"
                        icon="fa-linkedin"
                    />
                </div>
            </div>
        );
    }
}