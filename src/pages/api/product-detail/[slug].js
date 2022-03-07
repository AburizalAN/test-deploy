/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { encodeQueryData, fetchAdminToken } from 'utils/helper';

export default async function handler(req, res) {
  const { slug } = req.query;
  const dataParams = {
    'searchCriteria[currentPage]': '1',
    'searchCriteria[pageSize]': '10',
    'searchCriteria[filter_groups][0][filters][0][field]': 'url_key',
    'searchCriteria[filter_groups][0][filters][0][value]': slug,
    'searchCriteria[sortOrders][0][direction]': 'DESC',
    'searchCriteria[sortOrders][0][field]': 'position',
  };

  const tokenAdmin = await fetchAdminToken();

  const options = {
    method: 'GET',
    // body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenAdmin}`,
    },
  };
  //req.bearer

  const url = MAGENTO_BASE_URL + '/products?' + encodeQueryData(dataParams);
  const respond = await fetch(url, options).then((res) => res.json());

  return res.status(200).json({ data: respond });
}
