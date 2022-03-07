import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Step1 = '/assets/img/step-1.jpg';
const Step2 = '/assets/img/step-2.jpg';
const Step3 = '/assets/img/step-3.jpg';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CaraMembuat = () => {
  const [toggle, setToggle] = useState(false);
  const hide = toggle ? 'block' : 'none';
  const Step = (props) => {
    return (
      <Box sx={{ marginTop: '20px' }}>
        <Typography
          sx={{ margin: '12px', fontWeight: '600', color: '#265329' }}
        >
          Step {props.count}
        </Typography>
        <Box sx={{ width: '100vw', height: '200px' }}>
          <Image src={props.img} />
        </Box>
        <Typography sx={{ margin: '12px' }}>{props.text}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ marginTop: '12px' }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: '700', marginLeft: '12px' }}
      >
        Cara Membuat
      </Typography>

      <Step
        count="1"
        text="Cuci dan rendam beras selama satu jam."
        img={Step1}
      />
      <Step
        count="2"
        text="Siapkan air dalam panci untuk merebus semua bahan."
        img={Step2}
      />
      <Step
        count="3"
        text="Rebus kencur, jahe, kunyit, air asam, gula pasir dan gula jawa hingga mendidih."
        img={Step3}
      />
      <Box sx={{ display: hide }}>
        <Step
          count="4"
          text="Saring air rebusan jika sudah mendidih dan pisahkan ampas nya dengan air."
          img={Step1}
        />
        <Step
          count="5"
          text="Masukkan beras, kencur, dan air rebusan gula tadi ke dalam blender dan blender hingga halus."
          img={Step2}
        />
        <Step
          count="6"
          text="Sajikan beras kencur selagi hangat untuk membuat tubuh makin hangat, sehat, dan nyaman."
          img={Step3}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button
          sx={{ borderRadius: '12px' }}
          variant="contained"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? 'Sembunyikan Langkah' : 'Muat Lebih Banyak'}
        </Button>
      </Box>
    </Box>
  );
};

export default CaraMembuat;
