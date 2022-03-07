import { BASE_URL, MICROSERVICE_BASE_URL } from 'utils/constant';

async function handlerPostTemanMula(req, res) {
  const respond = await fetch(MICROSERVICE_BASE_URL + '/posts?categories=1,3');
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}

export default handlerPostTemanMula;
