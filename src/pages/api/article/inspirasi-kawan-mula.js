import { MICROSERVICE_BASE_URL } from 'utils/constant';

async function handlerPostBeauty(req, res) {
  const respond = await fetch(
    MICROSERVICE_BASE_URL + '/posts?categories=87&per_page=10'
  );
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}

export default handlerPostBeauty;
