export default async function handler(req, res) {
  const { method, body } = req;
  const {
    cookies: { AMToken },
  } = req;

  let options = {
    headers: {
      Authorization: `Bearer ${AMToken}`,
      'Content-Type': 'application/json',
    },
  };

  let response, data;

  if (method === 'POST') {
    options = {
      ...options,
      method: 'POST',
      body,
    };
    response = await fetch(
      `${process.env.API_URL}/rest/default/V1/carts/mine/estimate-shipping-methods-by-address-id`,
      options
    );
    data = await response.json();
  }

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: data, status: response.status });

    return res.status(400).json({ error: data });
  }

  return res.status(200).json({ data: data });
}
