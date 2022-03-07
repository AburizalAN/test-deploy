export default async function handlerDistricts(req, res) {
  const { cityId } = req.query;

  const url =
    process.env.API_URL + '/rest/V1/address/coverage/district/' + cityId;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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
