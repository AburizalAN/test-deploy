export default async function getStaticProps(req, res) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/rest/V1/productslider/premiumsecond`,
      { method: 'GET' }
    ).then((res) => res.json());

    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
