import React from "react";

import '../project/Wireframes.css'

export default function Wireframes({ images }){
    return(
        <> 
            <div className="container">
                <div className="wireframe">
                    {images.map((img, index) => (
                        <div key={index} className={`wireframe=${index + 1}`}>
                            <img src={img.src} alt={img.alt} id={img.id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}