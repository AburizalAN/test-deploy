// next
import Link from 'next/link';
import Image from 'next/image';
// styled component
import styled from 'styled-components';

// mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// image import

const MenuBanner1 = '/assets/img/KategoriResep/Indonesia.png';
const MenuBanner2 = '/assets/img/KategoriResep/Inter.png';
const Menu1 = '/assets/img/KategoriResep/sarap.png';
const Menu2 = '/assets/img/KategoriResep/plant.png';
const Menu3 = '/assets/img/KategoriResep/cemil.png';

const ImageBanner = styled(Image)`
  &&& {
    width: 100%;
    /* min-width: 110px; */
    height: 125px;
    max-height: ${(props) => (props.main ? '100px' : '125px')};
    object-fit: cover;
    border-radius: 12px;
    position: 'absolute';
    bottom: 0;
  }
`;

const Overlay = (props) => {
  return (
    <Box
      sx={{
        // background:
        //   'linear-gradient(90deg, rgba(0, 0, 0, 0.45) 49.05%, rgba(0, 0, 0, 0) 100%)',
        position: 'absolute',
        top: '0',
        zIndex: '1',
        width: '100%',
        height: '95%',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: props.position,
        padding: '8px 4px',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

const Banner = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={6}>
          <Link href="/resep/masakan-indonesia" passHref>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100px',
                marginRight: '6px',
                marginBottom: '6px',
              }}
            >
              <Overlay position="center" title="Masakan Indonesia" />
              <ImageBanner main src={MenuBanner1} layout="fill" />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/resep/masakan-internasional" passHref>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100px',
                marginLeft: '6px',
                marginBottom: '6px',
              }}
            >
              <Overlay position="center" title="Masakan Internasional" />
              <ImageBanner main src={MenuBanner2} layout="fill" />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="/resep/sarapan-sehat" passHref>
            <Box
              sx={{
                position: 'relative',
                width: '95%',
                height: '140px',
                margin: '6px 6px 0 0',
              }}
            >
              <Overlay position="center" title="Sarapan Sehat" />
              <ImageBanner src={Menu1} layout="fill" />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="/resep/plant-based" passHref>
            <Box
              sx={{
                position: 'relative',
                width: '95%',
                height: '140px',
                margin: '6px',
              }}
            >
              <Overlay position="center" title="Plant Based" />
              <ImageBanner src={Menu2} layout="fill" />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="/resep/cemilan-sehat" passHref>
            <Box
              sx={{
                position: 'relative',
                width: '95%',
                height: '140px',
                margin: '6px 0 0 12px',
              }}
            >
              <Overlay position="center" title="Cemilan Sehat" />
              <ImageBanner src={Menu3} layout="fill" />
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
