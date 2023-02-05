import React, { Component } from 'react';
import './Experience.css';
import ExperienceCard from './ExperienceCard';

export default class Experience extends Component {
    render() {
        return (
            <div className='my-experience' id="Experience">
                <h2>Experience</h2>
                <ul>
                    <ExperienceCard
                        company="SOTI Inc."
                        imageURL="/Images/Experience/soti-logo.png"
                        imageALT="soti logo"
                        position="Software Developer Intern"
                        technology={["C#", "dotnet framework", "Angular-12", "Microsoft SQL Server"]}
                        description={["TBD"]}
                    />
                </ul>
            </div>
        );
    }
}