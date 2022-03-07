import * as React from 'react';

function RestaurantIcon(props) {
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.25 11.117l2.358-2.358-5.158-5.15a.838.838 0 00-1.342.225 3.347 3.347 0 00.65 3.8l3.492 3.483zm5.65-1.508c1.275.591 3.066.175 4.391-1.15 1.592-1.592 1.9-3.875.675-5.1-1.216-1.217-3.5-.917-5.1.675-1.325 1.325-1.741 3.116-1.15 4.391l-7.55 7.55a.83.83 0 001.175 1.175L10.5 12.01l5.15 5.15a.828.828 0 001.175 0 .832.832 0 000-1.175l-5.15-5.15L12.9 9.609z"
        fill="#6F6F6F"
      />
    </svg>
  );
}

export default RestaurantIcon;
