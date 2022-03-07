import { useState, useEffect } from 'react';
import styled from 'styled-components';

import TickboxIcon from 'components/icons/tick-box';
import TickAltIcon from 'components/icons/tick-alt-box';
import Box from '@mui/material/Box';

const IconDiscount = '/assets/icons/discount.svg';

const colors = {
  primary: '#265329',
};

export const CardContainer = styled.div`
  padding: ${({ p }) => (p ? p : '0')};
  background-color: #fff;
  box-shadow: 0px 0px 27px -13px rgba(0, 0, 0, 0.5);
  margin-bottom: 12px;
  min-height: ${({ fullHeight }) => (fullHeight ? '100%' : '0px')};
  h6 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 13px;
    line-height: 1.4;
    font-weight: 400;
  }
  h5 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 24px;
  }
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24.55px;
  margin-bottom: ${({ mb }) => (mb ? mb : '0')};
`;

export const Paragraph = styled.p`
  font-size: ${({ size }) => (size ? size : '13px')};
  color: ${({ color }) => (color ? color : '#6F6F6F')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '17.73px')};
  margin: ${({ m }) => (m ? m : '0')};
  margin-bottom: ${({ mb }) => (mb ? mb : '0')};
  margin-right: ${({ mr }) => (mr ? mr : '0')};
  margin-left: ${({ ml }) => (ml ? ml : '0')};
  margin-top: ${({ mt }) => (mt ? mt : '0')};
`;

export const CheckoutHeaderContainer = styled.div`
  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }
  background: #fff;
  display: flex;
  width: 100vw;
  // position: fixed;
  // width: 50%;
  padding: 8px 0;
  z-index: 1;
  top: 0;

  div.chevronWrapper {
    svg {
      // font-size: 24px;
      width: 32px;
    }
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-right: 33px;
    width: fit-content;
  }

  div.icons {
    justify-content: flex-end;
    width: 20%;

    svg {
      margin-right: 10px;
    }
    display: flex;
    align-items: center;
  }

  div.headWrapper {
    font-weight: 400;
    display: flex;
    align-items: center;
    width: 65%;
    p {
      font-size: 22px;
      margin: 0;
    }
  }
`;

export const CardContentDetailBooking = styled.div`
  font-size: 13px;
  color: #6f6f6f;
  margin-bottom: 24px;
  & > div {
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const FooterCardContent = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1.35;
`;

export const SelectAll = ({ onSelect, status, onDelete }) => {
  const Container = styled.div`
    padding: 7px 12px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 12.75px;
    }
    span {
      margin-right: auto;
      font-size: 13px;
      font-weight: 600;
      color: black;
    }
    button {
      color: ${colors.primary};
      background: transparent;
      padding: 0;
      border: none;
      font-weight: 700;
    }
    .tick-button {
      border: none;
      padding: 0;
      margin: 0;
      background: none;
    }
  `;

  return (
    <Container>
      <button onClick={onSelect} className="tick-button">
        {status ? <TickboxIcon /> : <TickAltIcon />}
      </button>
      <span>Pilih Semua</span>
      <button onClick={onDelete}>hapus</button>
    </Container>
  );
};

export const VoucherSection = ({ onClick, voucher }) => {
  const VoucherBox = styled.div`
    background-color: #d2dac3;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: between;
    padding: 7px 12px;
    color: ${colors.primary};
    font-size: 13px;
    font-weight: 600;
    .content {
      flex: 1;
      div:first-child {
        font-size: 13px;
        font-weight: 600;
        line-height: 17.73px;
        color: ${colors.primary};
      }
      div:last-child {
        font-size: 9px;
        line-height: 12.28px;
        color: #6f6f6f;
      }
    }
  `;

  return (
    <Box p="12px" sx={{ borderTop: '1px solid #E0E0E0' }}>
      <VoucherBox onClick={onClick}>
        {voucher ? (
          <div className="content">
            <div>{voucher}</div>
          </div>
        ) : (
          <div className="content">
            <div>Gunakan Voucher</div>
            <div>Silahkan gunakan kode voucher yang kamu dapatkan</div>
          </div>
        )}
        <img width="24px" height="24px" src={IconDiscount} />
      </VoucherBox>
    </Box>
  );
};

export const SubmitCheckout = ({ subTotal, onSubmit }) => {
  const Container = styled.div`
    border-top: 1px solid #e0e0e0;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    .subTotal {
      flex: 1;
      font-size: 13px;
      padding: 0 16px;
      color: ${colors.primary};
      > *:not(:last-child) {
        margin-right: 10px;
      }
      b {
        font-weight: 900;
      }
    }
  `;

  const Button = styled.button`
    flex: 1;
    font-size: 13px;
    background-color: ${colors.primary};
    color: white;
    padding: 13px;
    border: none;
    border-radius: 12px;
  `;

  return (
    <Container>
      <div className="subTotal">
        <span>Subtotal</span>
        <b>Rp {new Intl.NumberFormat('id').format(subTotal)}</b>
      </div>
      <Button onClick={onSubmit}>Lanjut ke Pembayaran</Button>
    </Container>
  );
};
