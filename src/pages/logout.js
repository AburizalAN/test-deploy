import React from 'react';
import Cookie from 'js-cookie';

const LogoutPage = () => {
  React.useEffect(() => {
    Cookie.remove('AMToken');
    window.location.replace('/login');
  }, []);

  return null;
};

export default LogoutPage;
