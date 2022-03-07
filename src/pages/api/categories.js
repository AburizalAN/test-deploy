/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { encodeQueryData, fetchAdminToken } from 'utils/helper';

export default async function handler(req, res) {
  const dataParams = {
    'searchCriteria[filterGroups][0][filters][0][conditionType]': 'eq',
    'searchCriteria[filterGroups][0][filters][0][field]': 'is_active',
    'searchCriteria[filterGroups][0][filters][0][value]': '1',
    'searchCriteria[filterGroups][1][filters][0][conditionType]': 'eq',
    'searchCriteria[filterGroups][1][filters][0][field]': 'include_in_menu',
    'searchCriteria[filterGroups][1][filters][0][value]': '1',
    'searchCriteria[sortOrders][0][direction]': 'ASC',
    'searchCriteria[sortOrders][0][field]': 'level',
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

  const url =
    MAGENTO_BASE_URL + '/categories/list?' + encodeQueryData(dataParams);
  const respond = await fetch(url, options).then((res) => res.json());

  return res.status(200).json({ data: respond });
}
