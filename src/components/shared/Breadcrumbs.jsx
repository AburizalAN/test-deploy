import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';

/*
 Make sure to use Link component from nextjs for previous link
 use <span/> element for current page
 and import using dynamic with ssr false
*/

const Breadcrumbs = ({ breadcrumbs }) => {
  const wrapperRef = useRef(null);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);

  const handleNavigation = useCallback(() => {
    if (wrapperRef.current?.style) {
      if (y > window.scrollY) {
        wrapperRef.current.style.transform = `translateY(0)`;
      } else if (y + 5 < window.scrollY) {
        wrapperRef.current.style.transform = `translateY(-100%)`;
      }
    }
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => window.removeEventListener('scroll', handleNavigation);
  }, [handleNavigation]);

  return (
    <Wrapper ref={wrapperRef}>
      <StyledMuiBreadcrumbs
        sx={{ py: '9px', px: '12px' }}
        separator={
          <img src="/assets/icons/arrow_right.svg" alt="arrow_right" />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </StyledMuiBreadcrumbs>
    </Wrapper>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.node).isRequired,
};
export default Breadcrumbs;

const Wrapper = styled.div`
  position: fixed;
  max-width: 28rem;
  width: 100%;
  z-index: 1;
  transition: transform 0.3s ease;
`;

const StyledMuiBreadcrumbs = styled(MuiBreadcrumbs)`
  background: #fcfcfc;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  a {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0.1px;
    color: #265329;
    margin: 0 4px;
    text-decoration: none;
  }
  span {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0.1px;
    color: #6f6f6f;
    margin: 0 4px;
  }
`;
