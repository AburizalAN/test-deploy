import styled from 'styled-components';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/router';

import ClockIcon from 'components/icons/clock';

export const VoucherFormWrapper = styled.form`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const InputCodeVoucher = styled.input`
  flex: 1;
  min-width: 0;
  padding: 8px;
  background-color: #f5f5f5;
  text-align: left;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  line-height: 1.35;
  &:focus-visible {
    border: none;
    outline: none;
  }
  width: 100%;
  box-shadow: ${({ isErrorVoucher }) =>
    isErrorVoucher ? '0 0 0 1px #B42519' : 'none'};
`;

export const VoucherButton = styled(LoadingButton)`
  padding: 8px 32px !important;
  background-color: #265329;
  border: none;
  border-radius: 10px !important;
  color: #fff;
  font-size: 13px;
  line-height: 1.35 !important;
  width: 100%;
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

export const ErrorVoucherMessage = styled.div`
  color: #b42519;
  font-size: 10px;
  line-height: 13.64px;
  font-weight: 700;
  margin-top: 8px;
`;

export const VoucherItem = ({ title, image }) => {
  const router = useRouter();

  const Container = styled.div`
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  `;
  const Header = styled.div`
    display: flex;
    background-color: blue;
    border-radius: 5px 5px 0px 0px;
    position: relative;
    width: 100%;
    height: 63px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    &::before {
      content: '';
      position: absolute;
      transform: translate(0px, -50%);
      right: 0px;
      top: 50%;
      height: 21px;
      width: 9px;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      background-color: rgb(255, 255, 255);
      border: none;
    }
    &::after {
      content: '';
      position: absolute;
      transform: translate(0px, -50%);
      left: 0px;
      top: 50%;
      height: 21px;
      width: 9px;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      background-color: rgb(255, 255, 255);
      border: none;
    }
  `;

  const Body = styled.div`
    padding: 8px 12px;
    display: flex;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.07);
    border-radius: 0px 0px 5px 5px;
    > div:nth-child(1) {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    > div:nth-child(2) {
      flex: 1;
      font-size: 15px;
    }
    > div:nth-child(3) {
      display: flex;
      align-items: end;
    }
  `;

  const CTAButton = styled.button`
    background: none;
    border: none;
    padding: 4px 8px;
    align-items: center;
    color: #265329;
    border-radius: 4px;
    margin-top: auto;
  `;

  return (
    <Container onClick={() => router.push('/shopping/checkout/detail-voucher')}>
      <Header>
        <img src={image} alt="voucher" />
      </Header>
      <Body>
        <div>
          <ClockIcon />
        </div>
        <div>
          <div>Berlaku hingga</div>
          <div>27 Juli 2021</div>
        </div>
        <div>
          <CTAButton>Pilih Voucher</CTAButton>
        </div>
      </Body>
    </Container>
  );
};
