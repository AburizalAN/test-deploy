import * as React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Avatar,
  Grid,
  Link,
} from '@mui/material';
import { StyledModal } from './modal';
import { StyledIconButton } from './iconButton';
import { StyledTypography } from './typography';
import { StyledAccordion } from './accordion';
import CircleClose from 'components/icons/circle-close';

export const StyledListBank = ({
  bgcolor,
  data,
  grup,
  defaultValue,
  radio,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const img = {
    width: '40px',
  };
  const avatar = {
    border: '1px solid #D5D5D5',
  };
  const list = {
    display: 'flex',
    justifyContent: 'center',
    padding: '0',
  };

  const titled = {
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'inline-flex',
    justifyContent: 'space-between',
    minWidth: '100%',
    margin: 'auto 0',
  };

  const content = {
    fontSize: '14px',
    padding: '10px',
  };

  const dataList = [
    { uid: '1', title: 'ATM BCA', deskripsi: 'lorem ipsum' },
    { uid: '2', title: 'I-Banking BCA', deskripsi: 'lorem ipsum' },
    { uid: '3', title: 'M-Banking BCA', deskripsi: 'lorem ipsum' },
  ];

  const display = (e) => {
    return (
      <Link component="button" color="inherit" onClick={handleOpen}>
        {e}
      </Link>
    );
  };

  return (
    <List sx={{ width: '100%', bgcolor: { bgcolor } }} style={list}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label={grup}
          defaultValue={defaultValue}
          name="radio-buttons-group"
        >
          {radio ? (
            <>
              {data.map(function (item, i) {
                return (
                  <FormControlLabel
                    key={i}
                    value={item.value}
                    control={<Radio />}
                    label={
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            sx={{ bgcolor: 'white' }}
                            variant="rounded"
                            style={avatar}
                          >
                            <img src={item.icon} alt="icon" style={img} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.title}
                          secondary={item.subtitle}
                        />
                      </ListItem>
                    }
                  />
                );
              })}
            </>
          ) : (
            <>
              {data.map(function (item, i) {
                return (
                  <ListItem key={i} alignItems="flex-end">
                    <ListItemAvatar>
                      <Avatar
                        sx={{ bgcolor: 'white' }}
                        variant="rounded"
                        style={avatar}
                      >
                        <img src={item.icon} alt="icon" style={img} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={display(item.subtitle)}
                    />
                  </ListItem>
                );
              })}
            </>
          )}
        </RadioGroup>
      </FormControl>

      <StyledModal open={open} handleClose={handleClose}>
        <Grid item xs="12" style={titled}>
          <StyledTypography size="20px">Intruksi Pembayaran</StyledTypography>
          <StyledIconButton bgcolor="#FFF" onClick={handleClose}>
            <CircleClose
              sx={{
                stroke: '#6f6f6f',
                strokeWidth: 2,
                color: 'transparent',
              }}
            />
          </StyledIconButton>
        </Grid>
        <Grid item xs="12" style={content}>
          {dataList.map((item, i) => {
            return (
              <StyledAccordion title={item.title} key={item.id}>
                {item.deskripsi}
              </StyledAccordion>
            );
          })}
        </Grid>
      </StyledModal>
    </List>
  );
};

StyledListBank.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
  radio: PropTypes.bool,
  link: PropTypes.bool,
};
