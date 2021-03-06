import React from 'react';
export default function TimerFill(props) {
  const { height, width, color } = props;
  return (
    <svg
      width={!width ? '13' : width}
      height={!width ? '13' : width}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 7C11 9.48528 8.98528 11.5 6.5 11.5C4.01472 11.5 2 9.48528 2 7C2 4.51472 4.01472 2.5 6.5 2.5C8.98528 2.5 11 4.51472 11 7ZM6.5 9.5C7.88071 9.5 9 8.38071 9 7C9 5.61929 7.88071 4.5 6.5 4.5C5.11929 4.5 4 5.61929 4 7C4 8.38071 5.11929 9.5 6.5 9.5ZM6.5 10.5C8.433 10.5 10 8.933 10 7C10 5.067 8.433 3.5 6.5 3.5C4.567 3.5 3 5.067 3 7C3 8.933 4.567 10.5 6.5 10.5ZM7 5.5C7 5.22386 6.77614 5 6.5 5C6.22386 5 6 5.22386 6 5.5V7C6 7.27614 6.22386 7.5 6.5 7.5C6.77614 7.5 7 7.27614 7 7V5.5Z"
        fill={!color ? '#486140' : color}
      />
      <path
        d="M9.25 3.75L10 3"
        stroke={!color ? '#486140' : color}
        strokeLinecap="round"
      />
      <path
        d="M5.53407 1.1853C5.59105 1.13214 5.71659 1.08516 5.89124 1.05166C6.06588 1.01816 6.27987 1 6.5 1C6.72013 1 6.93412 1.01816 7.10876 1.05166C7.28341 1.08516 7.40895 1.13214 7.46593 1.1853"
        stroke={!color ? '#486140' : color}
        strokeLinecap="round"
      />
    </svg>
  );
}
