import { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

const Container = styled.div`
  font-size: 15px;
  color: #4d6044;
  margin-bottom: 12px;
  font-weight: 400;
  line-height: 20.46px;
`;

const Countdown = ({ expired_time }) => {
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

    return timeleft;
  }, [moment, expired_time]);

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Container>
      {time.hours < 10 ? `0${time.hours}` : time.hours} Jam :{' '}
      {time.minutes < 10 ? `0${time.minutes}` : time.minutes} Menit :{' '}
      {time.seconds < 10 ? `0${time.seconds}` : time.seconds} Detik
    </Container>
  );
};

Countdown.propTypes = {
  expired_time: PropTypes.string,
};

export default Countdown;
