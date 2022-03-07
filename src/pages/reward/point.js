import * as React from 'react';
import InnerLayout from 'components/InnerLayout';
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { StyledTypography } from 'components/ui/typography';
import { StyledPoints } from 'components/ui/points';
import Coin from 'components/icons/coin';
import UnstyledTabsCustomized from 'components/ui/unstyleTabs';
import { styled } from '@mui/system';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const Tab = styled(TabUnstyled)`
  color: #283f22;
  cursor: pointer;
  font-size: 15px;
  background: #fff;
  border: none;
  display: flex;
  border-bottom: 3px solid #e5e5e5;
  height: 40px;
  line-height: 40px;
  flex-grow: 1;
  width: 33%;
  justify-content: center;
  font-weight: 600;

  &:last-child {
    border-right: none;
  }

  &.Mui-selected {
    color: #a0c16b;
  }

  &:hover {
    color: #000;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #a0c16b;
    outline: none;
    border-bottom: 3px solid #e5e5e5;
  }

  &.${tabUnstyledClasses.selected} {
    color: #a0c16b;
    border-bottom: 3px solid #a0c16b;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  padding: 5px 0;
  height: 100%;
  background-color: #fff;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  display: flex;
  align-content: space-between;
  justify-content: space-between;
`;

const PointReferal = () => {
  const router = useRouter();

  const [value, setValue] = useState(0);
  const [pointss, setPointData] = useState({ data: [] });
  const [pointEarn, setPointEarn] = useState([]);
  const [pointSpend, setPointSpend] = useState([]);

  const referalState = useSelector((state) => state.referal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.referal.getReferalCode());
    } else {
      router.push('/login');
    }
  }, []);

  React.useEffect(() => {
    const fetchDataValues = async () => {
      const response = await fetch(`/api/points-all`);
      const newData = await response.json();

      setPointData(newData.data);
    };

    const getEarnPoints = async () => {
      const response = await fetch(`/api/points-earn`);
      const newData = await response.json();

      setPointEarn(newData.data);
    };

    const getSpendPoints = async () => {
      const response = await fetch(`/api/points-spend`);
      const newData = await response.json();

      setPointSpend(newData.data);
    };

    getEarnPoints();
    getSpendPoints();
    fetchDataValues();
  }, []);

  return (
    <InnerLayout
      hasToolbar={false}
      hasSideBar={false}
      hasBottomNav={false}
      hasOuterNav={true}
      title="Point Saya"
      backable
      backUrl="/reward"
    >
      <StyledPoints
        poin={referalState.listReferals.points}
        color="#fff"
      ></StyledPoints>

      <StyledTypography size="16px" weight="700" padding="10px 15px 20px">
        Riwayat Poin
      </StyledTypography>
      <UnstyledTabsCustomized>
        <TabsList>
          <Tab>Semua Riwayat</Tab>
          <Tab>Poin Didapat</Tab>
          <Tab>Poin Terpakai</Tab>
        </TabsList>
        <TabPanel value={0}>
          <List sx={{ paddingTop: 0 }}>
            {pointss.length > 0 ? (
              <>
                {pointss.map((op, id) => {
                  const op_point = op.transaction?.charAt(0);
                  return (
                    <React.Fragment key={id}>
                      <ListItem
                        sx={{
                          '& .MuiListItemSecondaryAction-root': {
                            fontWeight: 'bold',
                          },
                        }}
                        secondaryAction={
                          op_point === '-'
                            ? op.transaction
                            : `+${op.transaction}`
                        }
                      >
                        <ListItemAvatar>
                          <Coin sx={{ width: '30px', height: '30px' }} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={op?.transaction_type_desc}
                          secondary={op?.transaction_date}
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              <Typography sx={{ mt: 2 }}>History point not found</Typography>
            )}
          </List>
        </TabPanel>
        <TabPanel value={1}>
          <List sx={{ paddingTop: 0 }}>
            {pointEarn.length > 0 ? (
              <>
                {pointEarn.map((op, id) => {
                  const op_point = '+' + op.transaction;
                  return (
                    <React.Fragment key={id}>
                      <ListItem
                        sx={{
                          '& .MuiListItemSecondaryAction-root': {
                            fontWeight: 'bold',
                          },
                        }}
                        secondaryAction={op_point}
                      >
                        <ListItemAvatar>
                          <Coin sx={{ width: '30px', height: '30px' }} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={op?.transaction_type_desc}
                          secondary={op?.transaction_date}
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              <Typography sx={{ mt: 2 }}>Earned point not found</Typography>
            )}
          </List>
        </TabPanel>
        <TabPanel value={2}>
          <List sx={{ paddingTop: 0 }}>
            {pointSpend.length > 0 ? (
              <>
                {pointSpend.map((op, id) => {
                  const op_point = op.transaction;
                  return (
                    <React.Fragment key={id}>
                      <ListItem
                        sx={{
                          '& .MuiListItemSecondaryAction-root': {
                            fontWeight: 'bold',
                          },
                        }}
                        secondaryAction={op_point}
                      >
                        <ListItemAvatar>
                          <Coin sx={{ width: '30px', height: '30px' }} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={op?.transaction_type_desc}
                          secondary={op?.transaction_date}
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              <Typography sx={{ mt: 2 }}>Spended point not found</Typography>
            )}
          </List>
        </TabPanel>
      </UnstyledTabsCustomized>
    </InnerLayout>
  );
};

export default PointReferal;
