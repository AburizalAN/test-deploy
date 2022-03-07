import * as React from 'react';

function Search(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={11} cy={11} r={6} stroke="#25282B" />
      <path d="M20 20l-3-3" stroke="#25282B" strokeLinecap="round" />
    </svg>
  );
}

export default Search;
