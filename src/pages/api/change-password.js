async function update(req, res) {
  const {
    cookies: { AMToken },
    body,
  } = req;

  const url = process.env.API_URL + '/rest/default/V1/customers/me/password';
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AMToken}`,
    },
    body,
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: data, status: response.status });

    return res.status(400).json({ error: data });
  }

  return res.status(200).json({ data });
}

export default async function handler(req, res) {
  const {
    cookies: { AMToken },
    method,
  } = req;

  if (!AMToken) {
    return res
      .status(400)
      .json("I'm sorry, you are not authorized to access this request");
  }

  if (method === 'PUT') return update(req, res);
  return res.status(404).json('Not found');
}
