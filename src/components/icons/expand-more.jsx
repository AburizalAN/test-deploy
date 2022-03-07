import SvgIcon from '@mui/material/SvgIcon';

function ExpandMore(props) {
  return (
    <SvgIcon
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM16.001 10.0259C16.294 10.3179 16.295 10.7929 16.003 11.0869L12.531 14.5729C12.419 14.6865 12.2737 14.7598 12.1182 14.7845L12 14.7939C11.801 14.7939 11.609 14.7149 11.469 14.5729L7.998 11.0869C7.705 10.7929 7.707 10.3179 8 10.0259C8.294 9.7339 8.769 9.7339 9.061 10.0279L12 12.9819L14.94 10.0279C15.232 9.7339 15.707 9.7339 16.001 10.0259Z" />
    </SvgIcon>
  );
}
export default ExpandMore;