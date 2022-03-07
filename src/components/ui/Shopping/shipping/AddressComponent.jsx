import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexContainer } from 'components/style';
import { useRouter } from 'next/router';
import {
  CardContainer,
  CardTitle,
  Paragraph,
} from 'components/ui/shopping/checkout/checkout.style';
import Select from 'components/ui/shopping/shipping/Select';
import Divider from '@mui/material/Divider';
import ArrowRight from 'components/icons/arrow-right';
import Skeleton from 'react-loading-skeleton';

const Button = styled.button`
  background: none;
  padding: none;
  margin: none;
  border: none;
`;

const AddressComponent = ({ data, selectedAddress, setSelectedAddress }) => {
  const [listSelect, setListSelect] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const _listSelect = data.map((item) => {
      const label = item.custom_attributes.find(
        (attr) => attr.attribute_code === 'address_label'
      );
      return {
        address_id: item.address_id,
        label: label?.value,
        address: (
          <>
            <span>{`${item?.firstname} ${item?.lastname} - ${item?.telephone}`}</span>
            <br />
            <span>{`${item?.street[0]}`}</span>
          </>
        ),
        props: item,
      };
    });
    setListSelect(_listSelect);
  }, [data]);

  useEffect(() => {
    setSelectedAddress(listSelect[0]);
  }, [listSelect]);

  return (
    <CardContainer p="12px">
      <CardTitle mb="20px">Alamat Pengiriman</CardTitle>
      {data.length > 0 ? (
        <>
          <FlexContainer alignItems="unset">
            <Paragraph
              color="#6F6F6F"
              style={{ flex: 1 }}
              weight="700"
              mr="32px"
            >
              {selectedAddress?.address}
            </Paragraph>
            <FlexContainer width="auto" alignItems="center">
              <Button
                onClick={() =>
                  router.push(
                    `/account/address/edit/${selectedAddress.address_id}?redirect=${router.asPath}`
                  )
                }
              >
                <ArrowRight />
              </Button>
            </FlexContainer>
          </FlexContainer>
          <Divider sx={{ my: '20px', borderBottom: '2px solid #D8D8D8' }} />
          <Select
            selected={selectedAddress}
            setSelected={setSelectedAddress}
            list={listSelect}
          />
        </>
      ) : (
        <>
          <Skeleton height="40px" />
          <Divider sx={{ my: '20px', borderBottom: '2px solid #D8D8D8' }} />
          <Skeleton height="35px" />
        </>
      )}
    </CardContainer>
  );
};

AddressComponent.propTypes = {
  data: PropTypes.array,
  selectedAddress: PropTypes.object,
  setSelectedAddress: PropTypes.func,
};

export default AddressComponent;
