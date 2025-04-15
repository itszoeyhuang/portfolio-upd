import React from "react";
import Line from "../Line";

import '../project/TextBlock.css'

export default function TextBlock({heading, content}){
    return(
        <>
            <div className="container" id="challenge-container">
                <div className="challenge">
                    <div className="challenge_heading">
                        <h5>{heading}</h5>
                    </div>
                    <Line className="line" width={400} color="#F6F2EC" />
                    <div className="challenge_content">
                        {Array.isArray(content) ? (
                            content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                            ) : (
                            <p>{content}</p> 
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}