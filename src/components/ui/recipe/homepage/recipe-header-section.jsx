import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import ArrowRight from 'components/icons/arrow-right';

const Styled = {
  MenuWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  `,
};
const Links = styled(Link)`
  &&& {
    text-decoration: none;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }
`;

export default function RecipeHeaderSection(props) {
  const title = props.title ? props.title : 'empty line';
  return (
    <Styled.MenuWrapper>
      <Typography variant="h6" sx={{ fontWeight: '800', fontSize: '18px' }}>
        {title}
      </Typography>
      <Links href={props.href}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Lihat semua <ArrowRight />
        </Box>
      </Links>
    </Styled.MenuWrapper>
  );
}
