async function handleRegisterCustomer(req, res) {
  const { method, body } = req;

  if (method === 'POST') {
    const url = process.env.API_URL + '/rest/V1/customers';
    const options = {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response?.status !== 200) {
      return res.status(400).json({ error: data });
    }

    return res.status(200).json({ data });
  } else return res.status(400).json();
}

export default handleRegisterCustomer;
