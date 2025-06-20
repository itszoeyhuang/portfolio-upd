import React from "react";
import { motion } from "framer-motion";
import Arrow from "./Arrow";

import '../component/ProjectItem.css'

export default function ProjectItemA({order, images, title, description, skills, url}) {
    return(
        <div className="main-content">
            <div className="order">
                <h1>{order}</h1>
            </div>
            <div className="project-content">
                {/* Images */}
                <div className="side-content">
                    <div className="dribbleA">
                        {images.map((img, index) => (
                        <div key={index} className={`dribbleA-${index + 1} image-zoom-wrapper`}>
                            <motion.img
                                src={img.src}
                                alt={img.alt}
                                id={img.id}
                                className="zoomable-image"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                {/* <div className="side-content">
                    <div className="dribbleA">
                            {images.map((img, index) => (
                                <div key={index} className={`dribbleA-${index + 1}`}>
                                    <img src={img.src} alt={img.alt} id={img.id} />
                                </div>
                            ))}
                    </div>
                </div> */}
                {/* Title & Skills */}
                <div className="side-content_2">
                    <div className="project-title">
                        <h6>{title}</h6>
                        <p>{description}</p>
                    </div>
                    <div className="btn-skills">
                        <p>{skills}</p>
                    </div>
                    <Arrow pathTo={url} />
                </div>
            </div>
        </div>
    )
}