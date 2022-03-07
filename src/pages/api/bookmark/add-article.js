export default async function getStaticProps(req, res) {
  const {
    method,
    body,
    cookies: { AMToken },
  } = req;

  try {
    const response = await fetch(
      `${process.env.API_URL}/rest/default/V1/bookmark/mine/savearticle`,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AMToken}`,
        },
        body: body,
      }
    ).then((res) => res.json());

    return res.status(200).json({ response: response });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
