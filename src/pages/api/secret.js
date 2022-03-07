import {
  MAGENTO_BASE_URL,
  MAGENTO_PASS,
  MAGENTO_USERNAME,
} from 'utils/constant';

export default async function handler(req, res) {
  const user = {
    username: MAGENTO_USERNAME,
    password: MAGENTO_PASS,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const url = MAGENTO_BASE_URL + '/integration/admin/token';
  const respond = await fetch(url, options).then((res) => res.json());

  return res.status(200).json({ data: respond });
}
