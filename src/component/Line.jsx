import React from "react";

export default function Line() {
    return (
      <svg
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
        width="100%"
        height="1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="white" strokeWidth="1" />
      </svg>
    );
  }