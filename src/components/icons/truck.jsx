import * as React from 'react';

function TruckIcon(props) {
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
        d="M22.44 12.457l-2.25-5.25a.75.75 0 00-.69-.457h-2.25v-1.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h1.605a3 3 0 005.79 0h4.71a3 3 0 005.79 0h1.605a.75.75 0 00.75-.75v-5.25c0-.1-.02-.2-.06-.293zM17.25 8.25h1.755L20.61 12h-3.36V8.25zM6.75 19.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.605-2.25h-4.71a3 3 0 00-5.79 0H3V6h12.75v9.42a3 3 0 00-1.395 1.83zm2.895 2.25a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM21 17.25h-.855A3 3 0 0017.25 15v-1.5H21v3.75z"
        fill="#000"
      />
    </svg>
  );
}

export default TruckIcon;
