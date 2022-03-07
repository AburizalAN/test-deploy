import Image from 'next/image';
import PropTypes from 'prop-types';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

// styled
import styled from 'styled-components';

//icons
import TimerFill from 'components/icons/timer-fill';
import RestaurantIcon from 'components/icons/ic_round-restaurant-menu';
const LogoPng = '/assets/logo_new.png';

const Styled = {
  Container: styled(Box)`
    &&& {
      width: 100%;
      height: 300px;
      position: relative;
    }
  `,
  DescriptionBox: styled(Box)`
    &&& {
      min-width: 250px;
      padding: 12px;
      border-radius: 16px;
      background-color: white;
      position: absolute;
      bottom: -20px;
      left: 50%;
      right: 50%;
      transform: translate(-50%);
      background-blend-mode: luminosity;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
    }
  `,
  AcfBox: styled(Box)`
    &&& {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
    }
  `,
  AcfItem: styled(Box)`
    &&& {
      display: flex;
      align-items: center;
    }
  `,
  AcfDesc: styled(Typography)`
    &&& {
      font-size: 10px;
      margin-top: 5px;
      margin-left: 5px;
    }
  `,
  ImageContent: styled(Image)`
    &&& {
      object-fit: cover;
      border-radius: 12px;
    }
  `,
};

const ArticleHeader = (props) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date(props.date);
  let monthName = month[d.getMonth()];
  let year = d.getFullYear();
  let day = d.getDate();
  let newDate = `${day}, ${monthName} ${year}`;
  return (
    <Box sx={{ margin: '15px 0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src={LogoPng} width={30} height={30} layout="fixed" />
        <Box sx={{ marginLeft: '12px' }}>
          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            {props.user.name}
          </Typography>
          <Typography sx={{ fontSize: '11px' }}>{newDate}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Header = (props) => {
  let { user = { name: 'tes' }, date, icons } = props;
  // console.log(props.icons.length);
  return (
    <>
      <ArticleHeader date={date} user={user} />
      <Styled.Container>
        <Styled.ImageContent
          src={props.img}
          width={100}
          height={100}
          layout="fill"
        />
        <Styled.DescriptionBox>
          <Styled.AcfBox>
            <Styled.AcfItem>
              <TimerFill width={20} color="#6F6F6F" />
              <Styled.AcfDesc>
                : {!props.time ? '-' : `${props.time} mins`}
              </Styled.AcfDesc>
            </Styled.AcfItem>
            <Styled.AcfItem>
              <RestaurantIcon />
              <Styled.AcfDesc>
                {' '}
                : {!props.porsi ? '-' : `${props.porsi} orang`}
              </Styled.AcfDesc>
            </Styled.AcfItem>
          </Styled.AcfBox>
          {icons ? (
            <Box
              sx={{
                width: '100%',
                height: '48px',
                backgroundColor: '#E2E8CF',
                marginTop: '12px',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {icons.map((icon) => {
                return (
                  <Tooltip title={icon.acf.name} key={icon.id}>
                    <Box sx={{ margin: '8px 4px' }}>
                      <Image
                        src={`/assets/img/icon-resep/${icon.acf.icon.filename}`}
                        width={32}
                        height={32}
                      ></Image>
                    </Box>
                  </Tooltip>
                );
              })}
            </Box>
          ) : (
            ''
          )}
        </Styled.DescriptionBox>
      </Styled.Container>
    </>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.object,
  date: PropTypes.string,
};
