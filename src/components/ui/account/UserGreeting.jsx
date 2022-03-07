import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Skeleton from 'react-loading-skeleton';

const UserGreeting = (props) => {
  let { avatar, name, loading } = props;

  name = loading ? <Skeleton style={{ borderRadius: 20 }} /> : name;

  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" py={4}>
        <Avatar
          sx={{ width: 100, height: 100, mb: 2 }}
          src={avatar.src}
          alt={avatar.alt}
        />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Halo,
        </Typography>
        <Typography variant="h6" minWidth={100}>
          {name}
        </Typography>
      </Stack>
    </Container>
  );
};

UserGreeting.propTypes = {
  avatar: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  name: PropTypes.string,
  loading: PropTypes.bool,
};
UserGreeting.defaultProps = {
  avatar: { src: '', alt: '' },
  name: 'Put Your Name',
  loading: false,
};

export default UserGreeting;
