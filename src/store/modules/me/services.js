async function me() {
  try {
    const res = await fetch('/api/customer-information', {
      method: 'GET',
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function wishlist() {
  try {
    const res = await fetch('/api/wishlist-me', {
      method: 'GET',
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function voucher() {
  try {
    const res = await fetch('/api/voucher-claim', {
      method: 'GET',
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function editCustomer({ newProfile, profile = {} }) {
  const {
    firstname,
    lastname,
    email,
    phone,
    gender,
    birthdate: dob,
  } = newProfile;
  let newCustomAttributes = profile?.custom_attributes;

  if (
    profile?.custom_attributes?.some(
      (attr) => attr.attribute_code === 'customer_telephone'
    )
  ) {
    newCustomAttributes = profile?.custom_attributes?.map((attr) => {
      const isCustomerTelephone = attr?.attribute_code === 'customer_telephone';
      if (isCustomerTelephone) {
        return { attribute_code: 'customer_telephone', value: phone };
      }
      return attr;
    });
  } else {
    newCustomAttributes = [
      ...(profile?.custom_attributes || []),
      { attribute_code: 'customer_telephone', value: phone },
    ];
  }

  const customer = {
    ...profile,
    firstname,
    lastname,
    email,
    custom_attributes: newCustomAttributes,
    gender: parseInt(gender) ?? 0,
    dob,
  };

  try {
    const res = await fetch('/api/customer-information', {
      method: 'PUT',
      body: JSON.stringify({
        customer,
      }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function changePassword(data) {
  try {
    const res = await fetch('/api/change-password', {
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function addAddress({ address = {}, profile = {} }) {
  try {
    const {
      addressLabel,
      city,
      cityId,
      district,
      districtId,
      fullAddress,
      isMainAddress,
      firstname,
      lastname,
      phoneNumber,
      postalCode,
      region: { region, regionId, regionCode },
    } = address;

    const newAddress = {
      customer_id: profile.id,
      region: {
        region_code: regionCode,
        region: region,
        region_id: regionId,
      },
      region_id: regionId,
      country_id: 'ID',
      street: [fullAddress],
      company: 'AwalMula',
      telephone: phoneNumber,
      postcode: postalCode,
      city,
      firstname,
      lastname,
      custom_attributes: [
        {
          attribute_code: 'address_label',
          value: addressLabel,
        },
        {
          attribute_code: 'city_id',
          value: cityId,
        },
        {
          attribute_code: 'district',
          value: district,
        },
        {
          attribute_code: 'district_id',
          value: districtId,
        },
      ],
    };

    if (isMainAddress) {
      newAddress.default_shipping = true;
      newAddress.default_billing = true;
    }

    const res = await fetch('/api/customer-information', {
      method: 'PUT',
      body: JSON.stringify({
        customer: {
          ...profile,
          addresses: [
            ...profile.addresses.map((address) => {
              const restAddress = { ...address };

              if (isMainAddress) {
                delete restAddress.default_shipping;
                delete restAddress.default_billing;
              }

              return restAddress;
            }),
            newAddress,
          ],
        },
      }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function editAddress({ address = {}, profile = {} }) {
  const {
    id,
    addressLabel,
    city,
    cityId,
    district,
    districtId,
    fullAddress,
    isMainAddress,
    firstname,
    lastname,
    phoneNumber,
    postalCode,
    region: { region, regionId, regionCode },
  } = address;

  try {
    const res = await fetch('/api/customer-information', {
      method: 'PUT',
      body: JSON.stringify({
        customer: {
          ...profile,
          addresses: profile.addresses.map((address) => {
            const restAddress = { ...address };
            const editedAddress = {
              id,
              customer_id: profile.id,
              region: {
                region_code: regionCode,
                region: region,
                region_id: regionId,
              },
              region_id: regionId,
              country_id: 'ID',
              street: [fullAddress],
              company: 'AwalMula',
              telephone: phoneNumber,
              postcode: postalCode,
              city,
              firstname,
              lastname,
              custom_attributes: [
                {
                  attribute_code: 'address_label',
                  value: addressLabel,
                },
                {
                  attribute_code: 'city_id',
                  value: cityId,
                },
                {
                  attribute_code: 'district',
                  value: district,
                },
                {
                  attribute_code: 'district_id',
                  value: districtId,
                },
              ],
            };

            if (isMainAddress) {
              delete restAddress.default_shipping;
              delete restAddress.default_billing;
              editedAddress.default_shipping = true;
              editedAddress.default_billing = true;
            }

            if (address.id === id) return editedAddress;
            return restAddress;
          }),
        },
      }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function deleteAddress({ addressId, profile = {} }) {
  try {
    const res = await fetch('/api/customer-information', {
      method: 'PUT',
      body: JSON.stringify({
        customer: {
          ...profile,
          addresses: profile.addresses.filter(
            (address) => address.id != addressId
          ),
        },
      }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

export default {
  me,
  editCustomer,
  changePassword,
  addAddress,
  editAddress,
  deleteAddress,
  voucher,
  wishlist,
};
