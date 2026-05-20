import React from "react";

function Logo({ width = 140, height = 40 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Notebook */}
      <rect
        x="2"
        y="5"
        width="50"
        height="50"
        rx="6"
        stroke="#0B1F3A"
        strokeWidth="2"
      />

      {/* Binding */}
      <line x1="8" y1="5" x2="8" y2="45" stroke="#0B1F3A" strokeWidth="2" />

      {/* Lines */}
      <line x1="12" y1="15" x2="35" y2="15" stroke="#0B1F3A" strokeWidth="2" />
      <line x1="12" y1="22" x2="35" y2="22" stroke="#0B1F3A" strokeWidth="2" />
      <line x1="12" y1="29" x2="28" y2="29" stroke="#0B1F3A" strokeWidth="2" />

      {/* Highlight box */}
      <rect x="14" y="10" width="10" height="10" fill="#FF6A00" rx="2" />

      {/* Text: blog */}
      <text
        x="55"
        y="32"
        fontSize="20"
        fontWeight="bold"
        fill="#0B1F3A"
        fontFamily="Arial, sans-serif"
      >
        blog
      </text>

      {/* Text: zz */}
      <text
        x="105"
        y="32"
        fontSize="20"
        fontWeight="bold"
        fill="#FF6A00"
        fontFamily="Arial, sans-serif"
      >
        zz
      </text>
    </svg>
  );
}

export default Logo;