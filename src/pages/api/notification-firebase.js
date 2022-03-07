/* eslint-disable prettier/prettier */
import { MAGENTO_BASE_URL } from 'utils/constant';
import { decryptDataCrypto } from 'utils/helper';

export default async function handler(req, res) {
  const { body, headers, cookies } = req;
  const { authorization } = headers;
  const { datas } = body;
  const { AMToken } = cookies;

  // const {
  //   cookies: { AMToken },
  // } = req;
  const decryptDatas = await decryptDataCrypto(datas, AMToken);

  const postToken = {
    token: decryptDatas.token,
    browser: decryptDatas.browser,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(postToken),
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  };

  const url = MAGENTO_BASE_URL + '/notification/mine/savetoken';
  const respond = await fetch(url, options).then((res) => res.json());

  if (respond.message) {
    return res.status(400).json({ error: respond });
  }

  return res.status(200).json({ data: respond });
}
