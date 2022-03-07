import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from 'react-use';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import Alert from 'components/Alert';
import AddressCard from 'components/ui/account/AddressCard';

import ACTIONS from 'store/registerActions';
import { capitalize } from 'utils/helper';

const AlamatPengirimanPage = () => {
  const heightBottom = 76;
  const dispatch = useDispatch();
  const {
    loading,
    success,
    profile: { addresses = [] },
  } = useSelector((state) => state.me);

  const [defaultMainAddressId, setDefaultMainAddressId] = React.useState(null);
  const [selectedAddressId, setSelectedAddressId] = React.useState(null);
  const [selectedAddress, setSelectedAddress] = React.useState(null);

  React.useEffect(() => {
    dispatch(ACTIONS.me.getProfile());
  }, []);

  useUpdateEffect(() => {
    if (success) dispatch(ACTIONS.me.getProfile());
  }, [success]);

  useUpdateEffect(() => {
    const mainAddress =
      addresses?.find((address) => Boolean(address?.default_shipping)) || {};

    if (mainAddress?.id) {
      setDefaultMainAddressId(mainAddress?.id);
      setSelectedAddressId(mainAddress?.id);
    }
  }, [addresses]);

  const handleClickAddress = (id, address) => {
    setSelectedAddressId(id);
    setSelectedAddress(address);
  };

  const handleDeleteAddress = (id, addressName) => {
    dispatch(ACTIONS.me.deleteAddress(id, addressName));
  };

  const handleSetMainAddress = () => {
    let {
      id,
      city,
      country_id: countryId,
      custom_attributes: customAttributes,
      firstname,
      lastname,
      telephone: phoneNumber,
      street: [fullAddress],
      region: {
        region: regionName,
        region_id: regionId,
        region_code: regionCode,
      },
      postcode: postalCode,
    } = selectedAddress;

    id = parseInt(id);
    regionId = parseInt(regionId);
    const regId = parseInt(regionCode.split('-')[1]);

    const region = {
      id: regId,
      region: regionName,
      regionId,
      regionCode,
    };
    const addressLabel =
      customAttributes.find((attr) => attr.attribute_code === 'address_label')
        ?.value || '';
    const cityId = parseInt(
      customAttributes.find((attr) => attr.attribute_code === 'city_id')
        ?.value || 0
    );
    const district =
      customAttributes.find((attr) => attr.attribute_code === 'district')
        ?.value || '';
    const districtId = parseInt(
      customAttributes.find((attr) => attr.attribute_code === 'district_id')
        ?.value || 0
    );

    const values = {
      id,
      addressLabel,
      firstname,
      lastname,
      fullAddress,
      phoneNumber,
      region,
      city,
      cityId,
      district,
      districtId,
      postalCode,
      isMainAddress: true,
    };

    dispatch(ACTIONS.me.setMainAddress(values));
  };

  return (
    <AccountLayout
      title="Alamat Pengiriman"
      backable
      backUrl="/account"
      bottomNav={false}
      buttonComponent={
        <Link href="/account/address/add" passHref>
          <Button
            variant="contained"
            size="small"
            disableElevation
            sx={{ textTransform: 'initial', fontSize: 13, lineHeight: 1.5 }}
          >
            Tambah Alamat
          </Button>
        </Link>
      }
    >
      <Alert />

      <Paper elevation={0} sx={{ py: 4 }}>
        <Container maxWidth="sm">
          <Stack gap={2}>
            {loading && (
              <>
                <AddressCard loading />
                <AddressCard loading />
                <AddressCard loading />
              </>
            )}
            {!loading &&
              addresses.map((address) => {
                const {
                  id,
                  default_shipping: isMainAddress = false,
                  custom_attributes,
                  firstname,
                  lastname,
                  telephone: phoneNumber,
                  street,
                } = address;

                const selected = id === selectedAddressId;
                const addressName =
                  custom_attributes?.find(
                    (attr) => attr.attribute_code === 'address_label'
                  )?.value || '-';
                const district = capitalize(
                  custom_attributes?.find(
                    (attr) => attr.attribute_code === 'district'
                  )?.value || ''
                );
                const fullname = `${firstname} ${lastname}`;
                const addressDetail =
                  street
                    .map(
                      (word, i) =>
                        word + (i !== street.length - 1 ? <br /> : '')
                    )
                    .join('') + (district ? ', ' + district : '');

                return (
                  <AddressCard
                    key={id}
                    addressId={id}
                    selected={selected}
                    isMainAddress={isMainAddress}
                    addressName={addressName}
                    name={fullname}
                    addressDetail={addressDetail}
                    phoneNumber={phoneNumber}
                    onClick={() => {
                      handleClickAddress(id, address);
                    }}
                    onDelete={() => {
                      handleDeleteAddress(id, addressName);
                    }}
                  />
                );
              })}
          </Stack>
        </Container>
      </Paper>
      <Box height={heightBottom} mt={2} />
      <Box position="fixed" right={0} bottom={0} left={0}>
        <Paper
          elevation={3}
          sx={{
            height: heightBottom,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="sm">
            <Box px={2}>
              <LoadingButton
                fullWidth
                disableElevation
                disabled={selectedAddressId === defaultMainAddressId}
                variant="contained"
                loading={loading}
                loadingPosition="start"
                sx={{
                  borderRadius: 2,
                }}
                onClick={handleSetMainAddress}
              >
                Jadikan Alamat Utama
              </LoadingButton>
            </Box>
          </Container>
        </Paper>
      </Box>
    </AccountLayout>
  );
};

export default withAuth('PRIVATE_ROUTE')(AlamatPengirimanPage);
