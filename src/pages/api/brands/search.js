export default async function handler(req, res) {
  const { keyword } = req.query;
  let response = await fetch(
    `${process.env.API_URL}/rest/V1/brands/search/${keyword}`
  );
  let data = await response.json();

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: data, status: response.status });
    return res.status(400).json({ error: data });
  }
  return res.status(200).json({ data: data });
}
