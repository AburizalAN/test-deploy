/* eslint-disable @next/next/inline-script-id */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'styles/theme';
import 'nprogress/nprogress.css';
import 'styles/global.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { wrapper } from 'store';
import { useDidMount } from 'utils/helper';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';
import createEmotionCache from 'styles/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import Script from 'next/script';
import * as fbq from 'utils/fpixel';

const clientSideEmotionCache = createEmotionCache();

const TopProgressBar = dynamic(
  () => {
    return import('components/TopProgressBar');
  },
  { ssr: false }
);

const tagManagerArgs = {
  gtmId: 'GTM-WJRLJDK',
};

const TRACKING_ID_GTM = 'UA-185406557-1';

function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;
  const [state, setState] = React.useState(0);
  const didMount = useDidMount();
  const getLayout = Component.getLayout ?? ((page) => page);

  React.useEffect(() => storePathValues, [router.asPath]);
  React.useEffect(() => {
    if (didMount) {
      console.log('mounted');
      TagManager.initialize(tagManagerArgs);
      ReactGA.initialize(TRACKING_ID_GTM);
      ReactGA.pageview(window.location.pathname + window.location.search);
    } else {
      console.log('called', state);
    }
  }, [state, didMount]);

  React.useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem('currentPath');
    if (globalThis.location.href !== prevPath)
      storage.setItem('prevPath', prevPath);

    // Set the current path value by looking at the browser's location object.
    storage.setItem('currentPath', globalThis.location.href);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="facebook-domain-verification"
          content="ml825a53bm4kpxjihrlvt22i3d0npo"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Awal Mula</title>
      </Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <TopProgressBar />
      <SWRConfig value={{ revalidateOnMount: true }}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CacheProvider>
      </SWRConfig>
    </>
  );
}

MyApp.propTypes = {
  router: PropTypes.object,
};

export default wrapper.withRedux(MyApp);
