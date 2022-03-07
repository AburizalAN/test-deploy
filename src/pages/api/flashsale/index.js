export default async function handler(req, res) {
  const { method } = req;

  let response, data;

  if (method === 'GET') {
    response = await fetch(`${process.env.API_URL}/rest/default/V1/flashsale`);

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
