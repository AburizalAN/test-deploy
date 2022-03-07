import SvgIcon from '@mui/material/SvgIcon';

function EditSquareLightIcon(props) {
  // eslint-disable-next-line react/prop-types
  const { sx, ...restProps } = props;
  return (
    <SvgIcon sx={{ fill: 'none', ...sx }} {...restProps}>
      <path
        id="Stroke 1"
        d="M11.4922 2.789H7.75324C4.67824 2.789 2.75024 4.966 2.75024 8.048V16.362C2.75024 19.444 4.66924 21.621 7.75324 21.621H16.5772C19.6622 21.621 21.5812 19.444 21.5812 16.362V12.334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.82763 10.9209L16.3006 3.4479C17.2316 2.5179 18.7406 2.5179 19.6716 3.4479L20.8886 4.6649C21.8196 5.5959 21.8196 7.1059 20.8886 8.0359L13.3796 15.5449C12.9726 15.9519 12.4206 16.1809 11.8446 16.1809H8.09863L8.19263 12.4009C8.20663 11.8449 8.43363 11.3149 8.82763 10.9209Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 5"
        d="M15.165 4.60251L19.731 9.16851"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default EditSquareLightIcon;
