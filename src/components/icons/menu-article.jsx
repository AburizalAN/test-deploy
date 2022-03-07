import * as React from 'react';

function MenuArticle(props) {
  return (
    <svg
      width={26}
      height={24}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.333 22.666A2.667 2.667 0 0025 20V8a2.667 2.667 0 00-2.667-2.667h-2.666V20a2.667 2.667 0 002.666 2.666z"
        fill="#9EC06A"
      />
      <path
        d="M22.333 22.666H3.667A2.667 2.667 0 011 20V4a2.667 2.667 0 012.667-2.667H17A2.667 2.667 0 0119.667 4v1.333m2.666 17.333A2.667 2.667 0 0119.667 20V5.333m2.666 17.333A2.667 2.667 0 0025 20V8a2.667 2.667 0 00-2.667-2.667h-2.666m-5.334-4H9m-2.667 16h8m-8-10.667h8V12h-8V6.666z"
        stroke="#486140"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MenuArticle;
