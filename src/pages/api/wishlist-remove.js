export default async function handler(req, res) {
  const {
    cookies: { AMToken },
    query: { id },
  } = req;
  const { method } = req;

  let options = {
    headers: {
      Authorization: `Bearer ${AMToken}`,
      'Content-Type': 'application/json',
    },
  };

  let response, data;

  if (method === 'DELETE') {
    options = {
      ...options,
      method: 'DELETE',
    };
    response = await fetch(
      `${process.env.API_URL}/rest/V1/wishlist/${id}`,
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
