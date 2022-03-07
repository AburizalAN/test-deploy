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

  if (method === 'GET') {
    options = {
      ...options,
      method: 'GET',
      body,
    };
    response = await fetch(
      `${process.env.API_URL}/rest/V1/paymentconfirmation/orderlist`,
      options
    );
    data = await response.json();
  }

  if (response?.status !== 200) {
    return res.status(400).json({ error: data });
  }

  return res.status(200).json({ data: data });
}
