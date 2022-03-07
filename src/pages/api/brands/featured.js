export default async function handler(req, res) {
  let response = await fetch(
    `${process.env.API_URL}/rest/V1/brands/featuredbrands`
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
