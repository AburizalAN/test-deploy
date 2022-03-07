import * as React from 'react';

function Cart(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 8V7a4 4 0 014-4v0a4 4 0 014 4v1M15 14v-2M9 14v-2"
        stroke="#25282B"
        strokeLinecap="round"
      />
      <path
        d="M4 12c0-1.886 0-2.828.586-3.414C5.172 8 6.114 8 8 8h8c1.886 0 2.828 0 3.414.586C20 9.172 20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21v0c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13v-1z"
        stroke="#25282B"
      />
    </svg>
  );
}

export default Cart;
