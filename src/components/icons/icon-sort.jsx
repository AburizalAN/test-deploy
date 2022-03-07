import * as React from 'react';

function SortIcon(props) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.6 3.917a1.2 1.2 0 000 2.4h13.2a1.2 1.2 0 100-2.4H3.6zM3.6 8.717a1.2 1.2 0 000 2.4H12a1.2 1.2 0 100-2.4H3.6zM3.6 13.517a1.2 1.2 0 100 2.4h4.8a1.2 1.2 0 100-2.4H3.6zM18 9.917a1.2 1.2 0 10-2.4 0v6.703l-1.55-1.552a1.2 1.2 0 00-1.698 1.697l3.6 3.6a1.2 1.2 0 001.697 0l3.6-3.6a1.2 1.2 0 00-1.697-1.697l-1.551 1.552V9.917z"
        fill="#000"
      />
    </svg>
  );
}

export default SortIcon;
