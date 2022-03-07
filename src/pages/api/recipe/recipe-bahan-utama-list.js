import { MICROSERVICE_BASE_URL } from 'utils/constant';

export default async function getServerSideProps(req, res) {
  const respond = await fetch(MICROSERVICE_BASE_URL + '/bahan_utama');
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}
