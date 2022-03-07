/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { fetchQuoteId } from 'utils/helper';

export default async function handler(req, res) {
  const { headers } = req;
  const { authorization } = headers;

  const quoteId = await fetchQuoteId(authorization);

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  };

  const url = MAGENTO_BASE_URL + '/carts/mine';
  const respond = await fetch(url, options).then((res) => res.json());

  return res.status(200).json({ quoteId, data: respond });
}
