import * as React from 'react';

function SliderRight(props) {
  return (
    <svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_8888_42314)">
        <path
          opacity={0.4}
          d="M16.5 6c5.515 0 10 4.486 10 10s-4.485 10-10 10c-5.514 0-10-4.486-10-10s4.486-10 10-10z"
          fill="#9EC06A"
        />
        <path
          d="M15.058 11.779c.191 0 .383.073.529.219l3.487 3.47a.751.751 0 010 1.063l-3.487 3.472a.749.749 0 11-1.058-1.063L17.482 16l-2.953-2.94a.75.75 0 01.529-1.281z"
          fill="#486140"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_8888_42314"
          x={0.5}
          y={0}
          width={32}
          height={32}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8888_42314"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_8888_42314"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SliderRight;
