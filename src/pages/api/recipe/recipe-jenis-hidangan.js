import { MICROSERVICE_BASE_URL } from 'utils/constant';

export default async function getServerSideProps(req, res) {
  const { catalog } = req;
  const respond = await fetch(MICROSERVICE_BASE_URL + '/jenis_hidangan');
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}
