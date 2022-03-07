import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from 'react-use';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import withAuth from 'components/_hoc/withAuth';
import AccountLayout from 'components/AccountLayout';
import FormAddress from 'components/ui/account/FormAddress';

import ACTIONS from 'store/registerActions';

const UbahAlamatPage = (props) => {
  let {
    addressDetail: {
      address_id: addressId,
      city,
      country_id: countryId,
      custom_attributes: customAttributes,
      firstname,
      lastname,
      telephone: phoneNumber,
      street,
      region: {
        id: regId,
        region: regionName,
        region_id: regionId,
        region_code: regionCode,
      },
      postcode: postalCode,
      default_shipping: isMainAddress = false,
    },
  } = props;

  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, success } = useSelector((state) => state.me);
  const { redirect = null } = router.query;

  React.useEffect(() => {
    dispatch(ACTIONS.me.getProfile());
  }, []);

  useUpdateEffect(() => {
    if (success && redirect !== null) {
      router.push(redirect);
    } else if (success) {
      router.replace('/account/address');
    }
  }, [success]);

  const handleSubmit = (values) => {
    dispatch(ACTIONS.me.editAddress(values));
  };

  addressId = parseInt(addressId);
  regId = parseInt(regId);
  regionId = parseInt(regionId);

  const fullAddress = React.useMemo(() => {
    let fullAddress = '';

    street.forEach((address, index) => {
      if (address) {
        fullAddress =
          fullAddress + (address + (index !== street.length - 1 ? '\n' : ''));
      }
    });

    return fullAddress;
  }, [street]);

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
    customAttributes.find((attr) => attr.attribute_code === 'city_id')?.value ||
      0
  );
  const district =
    customAttributes.find((attr) => attr.attribute_code === 'district')
      ?.value || '';
  const districtId = parseInt(
    customAttributes.find((attr) => attr.attribute_code === 'district_id')
      ?.value || 0
  );

  return (
    <AccountLayout
      noButton
      bottomNav={false}
      title="Ubah Alamat"
      backable
      backUrl="/account/address"
    >
      <Paper elevation={0} sx={{ py: 2 }}>
        <Container maxWidth="sm">
          <FormAddress
            edit
            submitting={loading}
            initialValues={{
              id: addressId,
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
              isMainAddress,
            }}
            onSubmit={handleSubmit}
          />
        </Container>
      </Paper>
    </AccountLayout>
  );
};

export async function getServerSideProps(context) {
  const {
    req,
    query: { addressId },
  } = context;

  const {
    cookies: { AMToken },
  } = req;

  if (!AMToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    const url =
      process.env.API_URL + '/rest/V1/customer/address/detail/' + addressId;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AMToken}`,
      },
    };

    const response = await fetch(url, options);
    const addressDetail = await response.json();

    if (!addressDetail) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        addressDetail: addressDetail,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/account/address',
        permanent: false,
      },
    };
  }
}

UbahAlamatPage.propTypes = {
  addressDetail: PropTypes.object.isRequired,
};

export default withAuth('PRIVATE_ROUTE')(UbahAlamatPage);
