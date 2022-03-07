import * as React from 'react';

function CircleClose() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" fill="#D1D1D6" />
      <path
        d="M13 5L5 13"
        stroke="#6F6F6F"
        strokeWidth="1.2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L13 13"
        stroke="#6F6F6F"
        strokeWidth="1.2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default CircleClose;
