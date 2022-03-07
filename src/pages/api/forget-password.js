async function resetPassword(req, res) {
  const { body } = req;

  const url = process.env.API_URL + '/rest/default/V1/customers/resetPassword';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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

async function sendEmail(req, res) {
  const { body } = req;

  const url = process.env.API_URL + '/rest/default/V1/customers/password';
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
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
  const { method } = req;

  switch (method) {
    case 'POST':
      return resetPassword(req, res);
    case 'PUT':
      return sendEmail(req, res);
    default:
      return res.status(404).json('Not found');
  }
}
