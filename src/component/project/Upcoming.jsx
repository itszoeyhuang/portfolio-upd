import React from "react";
import { Link } from "react-router";
import '../project/Upcoming.css';

export default function Upcoming({ projects }){
    return(
        <>
        <div className="container">
            <h5>Up Next:</h5>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="upcoming" key={index} id={`upcoming-${index+1}`}>
                        <Link to={project.path || "#"}>
                        <img src={project.img.src} alt={project.img.alt} id={project.img.id} />
                        </Link>
                        <h6>{project.subtitle}</h6>
                        <p>{project.content || ""}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}