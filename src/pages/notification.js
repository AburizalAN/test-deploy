import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccountLayout from 'components/AccountLayout';
import Tabs, { TabPanel } from 'components/ui/tabs';
import CardNotification from 'components/CardNotification';
import { useRouter } from 'next/router';

import emptyImage from 'assets/img/empty-notif.webp';

const tabName = [
  { name: 'Semua', category: 'all' },
  { name: 'Pesanan', category: 'order' },
  { name: 'Artikel', category: 'article' },
  { name: 'Penting', category: 'important' },
  { name: 'Lainnya', category: 'others' },
];

const NotificationPage = (props) => {
  const { query } = props;
  const isShoppingOnly = Boolean(query?.shoppingOnly === 'true');
  const router = useRouter();

  const handleBack = () => {
    const storage = globalThis.sessionStorage;

    let prevUrl = storage?.prevPath ?? '/';
    if (prevUrl.includes('/notification') || prevUrl === 'null') {
      prevUrl = '/';
    }

    router.push(prevUrl);
  };

  const handleTabChange = (_, newValue) => {
    let newQuery = {};

    if (newValue && newValue !== 'all') newQuery = { c: newValue };
    else newQuery = {};

    router.push({ pathname: `/notification`, query: newQuery });
  };

  const mockNotifs = React.useMemo(
    () => [
      {
        id: 1,
        key: 'notif-1',
        category: 'order',
        imageUrl: '',
        title: 'Pesananmu telah dikirim',
        desc: '1 pcs Lemonilo Brownies Crispy - pastikan pesananmu dalam kondisi baik',
        date: 'Hari ini',
        time: '12.33',
      },
      {
        id: 2,
        key: 'notif-2',
        category: 'order',
        imageUrl: '',
        title: 'Pesananmu telah dikirim',
        desc: '1 pcs Lemonilo Brownies Crispy - pastikan pesananmu dalam kondisi baik',
        date: 'Hari ini',
        time: '12.33',
      },
      {
        id: 3,
        key: 'notif-3',
        category: 'article',
        imageUrl: '',
        title: 'Artikel Baru Telah Dipublish',
        desc: 'Cara Menyembuhkan Tulang Punggung yang Sering Pegal',
        date: 'Hari ini',
        time: '12.33',
        unread: true,
      },
      {
        id: 4,
        key: 'notif-4',
        category: 'article',
        imageUrl: '',
        title: 'Artikel Baru Telah Dipublish',
        desc: 'Cara Menyembuhkan Tulang Punggung yang Sering Pegal',
        date: 'Hari ini',
        time: '12.33',
        unread: true,
      },
    ],
    []
  );

  const filterNotifs = (category) => {
    return mockNotifs.filter((n) => n.category === category);
  };

  const renderMapNotifs = (notif, i) => {
    const { imageUrl, title, desc, date, time, unread } = notif;
    const key = notif?.key ?? notif?.id ?? i;
    const notifProps = { imageUrl, title, desc, date, time, unread };

    return <CardNotification key={key} {...notifProps} />;
  };

  const emptyNotif = React.useMemo(() => {
    return (
      <Stack alignItems="center" justifyContent="center" mt={7} mb={4}>
        <Image src={emptyImage} placeholder="blur" width={280} height={280} />
        <Box position="relative" zIndex={1} textAlign="center" mt={-5}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Belum ada notifikasi
          </Typography>
          <Typography variant="subtitle1">
            Saat ini Kamu belum memiliki notifikasi
          </Typography>
        </Box>
      </Stack>
    );
  }, []);

  const tabValue = React.useMemo(() => query?.c || 'all', [query]);

  return (
    <AccountLayout
      title="Notifikasi"
      noButton
      backable
      backUrl={null}
      onBackClick={handleBack}
      bottomNav={false}
      subAppBar={
        !isShoppingOnly && (
          <Container disableGutters maxWidth="sm">
            <Tabs
              variant="scrollable"
              aria-label="notification tabs"
              value={tabValue}
              onChange={handleTabChange}
              tabName={tabName}
            />
          </Container>
        )
      }
    >
      <Paper elevation={0}>
        {isShoppingOnly ? (
          <Box py={2}>
            {filterNotifs('order').length > 0
              ? filterNotifs('order').map(renderMapNotifs)
              : emptyNotif}
          </Box>
        ) : (
          <>
            <Box mt={6}>
              <TabPanel noPadding selected={tabValue === 'all'} index="all">
                <Box py={2}>
                  {mockNotifs.length
                    ? mockNotifs.map(renderMapNotifs)
                    : emptyNotif}
                </Box>
              </TabPanel>
              <TabPanel noPadding selected={tabValue === 'order'} index="order">
                <Box py={2}>
                  {filterNotifs('order').length > 0
                    ? filterNotifs('order').map(renderMapNotifs)
                    : emptyNotif}
                </Box>
              </TabPanel>
              <TabPanel
                noPadding
                selected={tabValue === 'article'}
                index="article"
              >
                <Box py={2}>
                  {filterNotifs('article').length > 0
                    ? filterNotifs('article').map(renderMapNotifs)
                    : emptyNotif}
                </Box>
              </TabPanel>
              <TabPanel
                noPadding
                selected={tabValue === 'important'}
                index="important"
              >
                <Box py={2}>
                  {mockNotifs.length > 0
                    ? mockNotifs.map(renderMapNotifs)
                    : emptyNotif}
                </Box>
              </TabPanel>
              <TabPanel
                noPadding
                selected={tabValue === 'others'}
                index="others"
              >
                <Box py={2}>
                  {filterNotifs('others').length > 0
                    ? filterNotifs('others').map(renderMapNotifs)
                    : emptyNotif}
                </Box>
              </TabPanel>
            </Box>
          </>
        )}
      </Paper>
    </AccountLayout>
  );
};

export function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query },
  };
}

NotificationPage.propTypes = {
  query: PropTypes.object,
};

NotificationPage.propTypes = {
  query: {},
};

export default NotificationPage;
