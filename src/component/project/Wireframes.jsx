import React from "react";
import '../project/Wireframes.css'

export default function Wireframes({ images }){
    return(
        <div className="container">
            <section className="wireframe-section"> 
                    <div className="wireframe-grid">
                        {images.map((img, index) => (
                            <div className="wireframe-card" key={index}>
                                <img 
                                    src={img.src} 
                                    alt={img.alt} 
                                    className="wireframe-image" />
                                {img.caption && (
                                    <p className="wireframe-caption">{img.caption}</p>
                                )}
                            </div>
                        ))}
                    </div>
            </section>
        </div>
    )
}