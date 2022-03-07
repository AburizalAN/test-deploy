/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { fetchAdminToken } from 'utils/helper';

export default async function handler(req, res) {
  const tokenAdmin = await fetchAdminToken();

  const options = {
    method: 'GET',
    // body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenAdmin}`,
    },
  };

  const url = MAGENTO_BASE_URL + '/productslider/mine/allcategory';
  const respond = await fetch(url, options).then((res) => res.json());

  return res.status(200).json({ data: respond });
}
