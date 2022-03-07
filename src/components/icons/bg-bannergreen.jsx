import * as React from 'react';

function BgGreenBanner(props) {
  return (
    <svg
      width={375}
      height={393}
      viewBox="0 0 375 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_8216:33064)">
        <path fill="#EEF6EB" d="M0 0H375V393H0z" />
        <circle
          cx={375}
          cy={21}
          r={61.5}
          stroke="#B6CFB1"
          strokeWidth={5}
          strokeDasharray="10 10"
        />
        <circle
          cx={-15}
          cy={308}
          r={61.5}
          stroke="#B6CFB1"
          strokeWidth={5}
          strokeDasharray="10 10"
        />
      </g>
      <defs>
        <clipPath id="clip0_8216:33064">
          <path fill="#fff" d="M0 0H375V393H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BgGreenBanner;
