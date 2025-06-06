import React, { useState, useRef } from "react";
import CustomCursor from "./CustomCursor";

import "../component/GradientBackground.css";

export default function GradientBackground(){
  const containerRef = useRef(null);

    return(
        <div ref={containerRef}  className="gradient-background" data-cursor-message="scroll">
            <CustomCursor containerRef={containerRef} />
            <div className="title">
                <h1>ITSZOEYHUANG</h1>
            </div>
            <div className="arrow-down"></div>
        </div>
    );
}