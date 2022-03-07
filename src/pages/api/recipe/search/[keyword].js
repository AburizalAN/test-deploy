import { MICROSERVICE_BASE_URL } from 'utils/constant';

export default async function getStaticProps(req, res) {
  const { keyword } = req.query;

  const respond = await fetch(
    MICROSERVICE_BASE_URL + `/recipe?search=${keyword}`
  );
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log(data);
  return res.status(200).json({ data: data });
}
