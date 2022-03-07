import * as React from 'react';

function ArrowDownCircle(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 1.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5zm4.001 6.526a.751.751 0 01.002 1.06l-3.472 3.487a.743.743 0 01-.413.211l-.118.01a.746.746 0 01-.531-.221l-3.471-3.486a.75.75 0 111.063-1.06L12 12.983l2.94-2.954a.75.75 0 011.061-.002z"
        fill="#000"
      />
    </svg>
  );
}

export default ArrowDownCircle;
