import styled from '@mui/system/styled';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const StyledButtonBase = styled(ButtonBase)`
  padding: 13px 0;
  width: 100%;
  background-color: #f6f6f6;
`;

const ButtonLogout = (props) => {
  const { ...restProps } = props;

  return (
    <StyledButtonBase {...restProps}>
      <Typography variant="subtitle1" fontWeight="bold">
        Keluar
      </Typography>
    </StyledButtonBase>
  );
};

export default ButtonLogout;
