async function getDetail(req, res) {
  const {
    cookies: { AMToken },
    query: { sku },
  } = req;

  const url = `${process.env.API_URL}/rest/default/V1/products/` + sku;

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AMToken}`,
    },
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

export default function handlerGetProductSku(req, res) {
  const {
    cookies: { AMToken },
  } = req;

  if (!AMToken) {
    return res
      .status(400)
      .json("I'm sorry, you are not authorized to access this request");
  }

  return getDetail(req, res);
}
