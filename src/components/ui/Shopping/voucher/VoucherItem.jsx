import ClockIcon from 'components/icons/clock';
import { Button, Grid, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Voucher = ({
  bg,
  bgcolor,
  img,
  expired,
  blade,
  title,
  valid,
  handleSelect,
  handleClick,
}) => {
  const card = {
    marginBottom: '15px',
    position: 'relative',
    padding: '0',
    width: '100%',
  };
  const backdrop = {
    backgroundColor: '#0003',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    zIndex: '99',
    display: expired ? 'block' : 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const imgss = {
    width: '100%',
    height: '70px',
    objectFit: 'cover',
    flexGrow: '1',
    textAlign: 'center',
  };
  const header = {
    background: bg ? "url('" + bg + "')" : 'none',
    backgroundColor: bgcolor ? bgcolor : '#E89A02',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '80px',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    padding: '5px 15px 5px 20px',
  };
  const circle1 = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    left: '0',
    top: '40px',
    height: '20px',
    width: '12px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    backgroundColor: '#FFF',
    border: 'none',
  };
  const circle2 = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    right: '0',
    top: '40px',
    height: '20px',
    width: '12px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: '#FFF',
    border: 'none',
  };
  const detail = {
    backgroundColor: '#FFF',
    color: '#000',
    boxShadow: '0px 0px 7px 2px rgba(0, 0, 0, 0.07)',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    padding: '5px 10px',
    display: blade ? 'block' : 'none',
  };
  const headerText = {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '18px',
    letterSpacing: '0.1px',
    color: '#FFFFFF',
  };
  const descText = {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.15px',
    color: '#000000',
    margin: 0,
  };

  return (
    <div style={card} onClick={handleClick}>
      <div style={header}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={8}>
            <p style={headerText}>{title}</p>
          </Grid>
          <Grid item xs={4}>
            <img src={img} style={imgss} alt="icon_voucher" width="100%" />
          </Grid>
        </Grid>
        <div style={circle1}></div>
        <div style={circle2}></div>
      </div>
      <div style={detail}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={8}>
            <Box display="flex" alignItems="center" gap={1}>
              <ClockIcon />
              <Box>
                {expired ? (
                  <p style={{ ...descText, marginBottom: '0px' }}>
                    Voucher expired
                  </p>
                ) : (
                  <>
                    <p style={{ ...descText, marginBottom: '5px' }}>
                      Berlaku hingga
                    </p>
                    <p style={descText}>
                      {isNaN(new Date(valid).getTime()) ? 'Selamanya' : valid}
                    </p>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
          {!expired ? (
            <Grid item>
              <Button size="small" onClick={handleSelect}>
                Pilih Voucher
              </Button>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </div>
      <div style={backdrop}></div>
    </div>
  );
};

Voucher.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
  fontcolor: PropTypes.string,
  bg: PropTypes.string,
  img: PropTypes.string,
  expired: PropTypes.bool,
  desc: PropTypes.string,
  blade: PropTypes.bool,
  title: PropTypes.string,
  valid: PropTypes.string,
  handleSelect: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Voucher;
