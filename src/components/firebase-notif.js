import React, { useState, useEffect } from 'react';
import { requestForToken, onMessageListener } from 'utils/firebase';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { encryptDataCrypto, get_browser_info } from 'utils/helper';
import Cookie from 'js-cookie';
import ACTIONS from 'store/registerActions';
import { useDispatch } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (notification?.title) {
      setOpen(true);
    }
  }, [notification]);

  useEffect(() => {
    setToken();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) =>
        console.log('event for the service worker', event)
      );
    }

    async function setToken() {
      try {
        const token = await requestForToken();
        const browser = get_browser_info();
        const AMToken = Cookie.get('AMToken');

        console.log('AMToken', AMToken);
        if (token) {
          if (AMToken) {
            const bodyDatas = await {
              token: token,
              browser: browser.name,
            };
            const datas = await encryptDataCrypto(bodyDatas, AMToken);
            console.log('datas', datas);
            const parserBody = () => {
              return {
                datas: datas,
              };
            };

            const body = await parserBody();
            await dispatch(ACTIONS.info.postFirebaseToken(body));

            // not working
            return token;
          }
        }
      } catch (error) {
        console.log('errpr', error);
      }
    }

    onMessageListener()
      .then((payload) => {
        setNotification({
          title: payload?.notification?.title,
          body: payload?.notification?.body,
        });
      })
      .catch((err) => console.log('failed: ', err));
  }, []);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        icon={false}
        onClose={handleClose}
        color="success"
        sx={{ width: '100%' }}
        style={{
          backgroundColor: '#edf7ed',
          maxWidth: '27rem',
          width: '27rem',
          marginTop: '70px',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '8px',
            marginTop: '0',
          }}
        >
          {notification?.title}
        </p>
        <p style={{ fontSize: '14px', marginBottom: '0px', marginTop: '0' }}>
          {notification?.body}
        </p>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
