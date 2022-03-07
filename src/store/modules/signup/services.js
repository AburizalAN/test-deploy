async function signup(data = {}) {
  try {
    const { firstname, lastname, email, password, phoneNumber, referralCode } =
      data;

    const res = await fetch('/api/register-customer', {
      method: 'POST',
      body: JSON.stringify({
        customer: {
          email,
          firstname,
          lastname,
          custom_attributes: [
            {
              attribute_code: 'referral_code',
              value: referralCode,
            },
            {
              attribute_code: 'customer_telephone',
              value: phoneNumber,
            },
          ],
        },
        password,
      }),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

export default {
  signup,
};
