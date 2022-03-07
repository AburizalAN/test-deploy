import * as React from 'react';

function FilterIcons(props) {
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
        d="M9 5.317a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3.001 3.001 0 015.66 0H19a1 1 0 110 2h-7.17a3 3 0 01-5.66 0H5a1 1 0 110-2h1.17zm8.83 6a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H19a1 1 0 010 2h-1.17a3 3 0 01-5.66 0H5a1 1 0 010-2h7.17zm-3.17 6a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H19a1 1 0 010 2h-7.17a3 3 0 01-5.66 0H5a1 1 0 010-2h1.17z"
        fill="#000"
      />
    </svg>
  );
}

export default FilterIcons;
