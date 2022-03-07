/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { encodeQueryData, fetchAdminToken } from 'utils/helper';

export default async function handler(req, res) {
  const { id, page = 1, pageSize = 10 } = req.query;
  const dataParams = {
    'searchCriteria[currentPage]': `${page}`,
    'searchCriteria[pageSize]': `${pageSize}`,
    'searchCriteria[filter_groups][0][filters][0][field]': 'category_id',
    'searchCriteria[filter_groups][0][filters][0][value]': id,
    'searchCriteria[sortOrders][0][direction]': 'DESC',
    'searchCriteria[sortOrders][0][field]': 'position',
    'searchCriteria[filter_groups][1][filters][0][field]': 'visibility',
    'searchCriteria[filter_groups][1][filters][0][value]': 4,
    'searchCriteria[filter_groups][1][filters][0][condition_type]': 'eq',
    'searchCriteria[filter_groups][2][filters][0][field]': 'status',
    'searchCriteria[filter_groups][2][filters][0][value]': 1,
    'searchCriteria[filter_groups][2][filters][0][condition_type]': 'eq',
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

  return res.status(200).json({ data: respond, id, page });
}
