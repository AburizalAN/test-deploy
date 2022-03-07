import SvgIcon from '@mui/material/SvgIcon';

function CopySquareIcon(props) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      {...props}
    >
      <rect width="60" height="60" rx="10" fill="#FFCC29" />
      <path
        d="M26.3333 37.3332H20.8333C16.7832 37.3332 13.5 34.0499 13.5 29.9998V29.9998C13.5 25.9498 16.7832 22.6665 20.8333 22.6665H26.3333"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFCC29"
      />
      <path
        d="M37.3327 30H22.666"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFCC29"
      />
      <path
        d="M33.6667 37.3332H39.1667C43.2168 37.3332 46.5 34.0499 46.5 29.9998V29.9998C46.5 25.9498 43.2168 22.6665 39.1667 22.6665H33.6667"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFCC29"
      />
    </SvgIcon>
  );
}

export default CopySquareIcon;
