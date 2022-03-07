import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Countdown = ({ expired_time, Component }) => {
  // console.log('expired_time', expired_time);
  const calculateTimeLeft = useCallback(() => {
    let expired = moment(expired_time, 'YYYY-MM-DD HH:mm:ss');
    let diff = parseInt(moment.duration(expired.diff(moment())).asSeconds());

    let timeleft = {};

    if (diff > 0) {
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = Math.floor(diff % 60);
      timeleft = {
        hours,
        minutes,
        seconds,
      };
    }
    return Object.keys(timeleft).length > 0 ? timeleft : null;
  }, [moment, expired_time]);

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Component time={time} />
    </>
  );
};

Countdown.propTypes = {
  expired_time: PropTypes.string,
  Component: PropTypes.elementType,
};

export default Countdown;
