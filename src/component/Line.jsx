import React from "react";

export default function Line({ width = 1300, color="white"}){
    return(
        <svg width={width} height="1" viewBox="0 0 {width} 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2={width} y2="0.5" stroke={color}/>
        </svg>
    );
}