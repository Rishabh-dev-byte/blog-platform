import React from "react";

function Logo({ width = 24, height = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Blog Logo"
    >
      {/* Notebook / Blog outline */}
      <rect
        x="3"
        y="2"
        width="16"
        height="20"
        rx="2"
        stroke="black"
        strokeWidth="2"
      />

      {/* Binding */}
      <line
        x1="7"
        y1="2"
        x2="7"
        y2="22"
        stroke="black"
        strokeWidth="2"
      />

      {/* Text lines */}
      <line
        x1="10"
        y1="7"
        x2="17"
        y2="7"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="10"
        y1="11"
        x2="17"
        y2="11"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="10"
        y1="15"
        x2="15"
        y2="15"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Logo;
