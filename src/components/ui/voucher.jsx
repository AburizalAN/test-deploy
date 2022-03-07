import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

export const Voucher = ({
  children,
  bg,
  bgcolor,
  fontcolor,
  img,
  claimed,
  desc,
  blade,
  contentHeight,
  innerWidth,
  innerDetail,
  innerHeight,
}) => {
  const card = {
    margin: '5px 0',
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
    display: claimed ? 'block' : 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const header = {
    background: bg ? "url('" + bg + "')" : 'none',
    backgroundColor: bgcolor ? bgcolor : '#E89A02',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: innerHeight ? innerHeight : '120px',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    borderBottom: '3.2px dashed #FFF',
    padding: '5px',
    textAlign: 'center',
  };
  const imgss = {
    width: '100%',
    height: innerHeight ? innerHeight : '100px',
    objectFit: 'cover',
    flexGrow: '1',
    textAlign: 'center',
  };
  const circle1 = {
    position: 'absolute',
    transform: 'translate(0, -50%)',
    left: '0',
    top: innerHeight ? innerHeight : '120px',
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
    top: innerHeight ? innerHeight : '120px',
    height: '20px',
    width: '12px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: '#FFF',
    border: 'none',
  };
  const content = {
    backgroundColor: bgcolor ? bgcolor : '#E89A02',
    color: fontcolor ? fontcolor : 'white',
    padding: '8px',
    fontSize: '10px',
    fontWeight: 'bold',
    height: contentHeight ? contentHeight : '65px',
    textAlign: contentHeight ? 'center' : 'left',
    borderBottomLeftRadius: blade ? '0px' : '8px',
    borderBottomRightRadius: blade ? '0px' : '8px',
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
  const inner_detail = {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '20px',
  };
  const space = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  return (
    <div style={card}>
      <div style={header}>
        {innerWidth ? (
          <div style={space}>
            <div style={inner_detail}>{innerDetail}</div>
            <img style={imgss} src={img} alt="icon_voucher" width="100%" />
          </div>
        ) : (
          <img style={imgss} src={img} alt="icon_voucher" width="100%" />
        )}
        <div style={circle1}></div>
        <div style={circle2}></div>
      </div>
      <div style={content}>{desc}</div>
      <div style={detail}>{children}</div>
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
  claimed: PropTypes.bool,
  desc: PropTypes.string,
};
