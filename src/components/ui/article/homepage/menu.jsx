// next
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// icons
import Beauty from 'components/icons/beauty';
import Education from 'components/icons/education';
import Run from 'components/icons/run';
import Letter from 'components/icons/letter';
import RecipeBook from 'components/icons/recipeBook';

const MenuSet = (props) => {
  return (
    <Link href={props.href}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            padding: '8px',
            borderRadius: '50%',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.icon}
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: 'center', maxWidth: '75px', marginTop: '8px' }}
        >
          {props.title}
        </Typography>
      </Box>
    </Link>
  );
};

const Menu = () => {
  return (
    <Box
      sx={{
        padding: '24px 20px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <MenuSet icon={<Beauty />} title="Beauty" href="/artikel/beauty" />
      <MenuSet icon={<Run />} title="Lifestyle" href="/artikel/lifestyle" />
      <MenuSet
        icon={<Letter />}
        title="Inspirasi Kawan Mula"
        href="/artikel/inspirasi-kawan-mula"
      />
      <MenuSet icon={<RecipeBook />} title="Recipe" href="/resep" />
    </Box>
  );
};
export default Menu;
