import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="My-Projects" id="Projects">
                <h2>Projects</h2>
                <ul>
                    <ProjectCard
                        title="Pizza Web-App (Django)"
                        imageURL="/Images/Project/make-order.gif"
                        imageALT="Create Order Django App"
                        description="The above visual shows how to place an order for any pizza or food items using in the pizza order application."
                        tags={["Django", "Sqlite3", "HTML", "CSS", "Bootstrap4", "Client-Javascript", "PayPal (Javascript)"]}
                        repoLink="https://github.com/Aadhieaswar/django-pizza-web-app"
                    />

                    <ProjectCard
                        title="Auction Web-App (Django)"
                        imageURL="/Images/Project/create-listing.gif"
                        imageALT="Create Listing Django App"
                        description="The above visual shows how to create a listing in the auction website"
                        tags={["Django", "Sqlite3", "HTML", "CSS", "Bootstrap4"]}
                        repoLink="https://github.com/Aadhieaswar/auction-web-app"
                    />

                    <ProjectCard
                        title="N/A"
                        imageURL="/Images/Project/working_on_it.gif"
                        imageALT="N/A"
                        description="N/A"
                        tags={[]}
                        repoLink="#"
                    />
                </ul>
            </div>
        );
    }
}