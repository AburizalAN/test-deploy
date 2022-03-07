import React from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

import LoginPage from 'pages/login';

/**
 * High Order Component withAuth
 * @param {string} permission - 'PUBLIC_ROUTE' | 'PRIVATE_ROUTE'
 * @return {func} with return Functional Comp
 */
const withAuth =
  (permission = 'PUBLIC_ROUTE') =>
  (AuthComponent) => {
    const Auth = (props) => {
      const router = useRouter();
      const [token, setToken] = React.useState(null);
      const [isAuthPage, setIsAuthPage] = React.useState(false);
      const [loading, setLoading] = React.useState(true);

      React.useEffect(async () => {
        const token = Cookie.get('AMToken');
        setToken(token);
        setIsAuthPage(['/signup'].includes(router.asPath));
        setLoading(false);
      }, []);

      switch (permission) {
        case 'PRIVATE_ROUTE': {
          // !need full loading page design
          if (loading) return <>Please wait...</>;

          if (!token) {
            if (isAuthPage) return <AuthComponent {...props} />;
            return <LoginPage {...props} />;
          } else {
            if (isAuthPage) {
              router.replace('/');

              // !need full loading page design
              return <>Please wait...</>;
            }
            return <AuthComponent {...props} />;
          }
        }

        case 'PUBLIC_ROUTE': {
          return <AuthComponent {...props} />;
        }

        default: {
          console.error('unknown permission');
          return null;
        }
      }
    };

    return Auth;
  };

export default withAuth;
