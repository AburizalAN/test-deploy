/* eslint-disable prettier/prettier */
import { BASE_URL } from 'utils/constant';
import { encodeQueryData, fetchAdminToken } from 'utils/helper';

export default async function handler(req, res) {
  const { search, page = 1 } = req.query;
  const dataParams = {
    search: `${search}`,
    per_page: `20`,
    page: `${page}`,
  };

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const url = BASE_URL + '/posts?' + encodeQueryData(dataParams);
  const respond = await fetch(url, options).then((res) => res.json());

  return res.status(200).json({ article: respond, page });
}
