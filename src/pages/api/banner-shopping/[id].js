export default async function handler(req, res) {
  const { query } = req;
  const { id } = query;

  let response, data;

  response = await fetch(
    `${process.env.API_URL_BLOG}/wp-json/wp/v2/banner_shopping/?banner_categories=${id}`
  );
  data = await response.json();

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: data, status: response.status });

    return res.status(400).json({ error: data });
  }

  return res.status(200).json({ data: data });
}
