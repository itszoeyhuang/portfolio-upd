import React from "react";
import Line from "../Line";

import '../project/Intro.css'

export default function Intro({ title, subtitle, content, listTitle, listItems, img = {} }){
    return(
        <>
        <div className="container">
            <div className="project-intro">
                <div className="project_text">
                    <div className="intro_title">
                        <h1>{title}</h1>
                        <h5>{subtitle}</h5>
                    </div>
                    <div className="line-container">
                        <Line className="line" width={600} color="#F6F2EC" />
                    </div>
                    <div className="intro_content">
                        {Array.isArray(content) ? (
                        content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                        ) : (
                        <p>{content}</p> 
                        )}
                    </div>
                    <div className="intro_solution">
                        <h6>{listTitle}</h6>
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="project-dribble">
                    <img src={img.src} alt={img.alt} id={img.id} />
                </div>
            </div>
        </div>
        </>
    )
}
