import { BASE_URL, MICROSERVICE_BASE_URL } from 'utils/constant';

async function handlerPostDetail(req, res) {
  const { slug } = req.query;
  const respond = await fetch(MICROSERVICE_BASE_URL + `/posts/?slug=${slug}`);
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}

export default handlerPostDetail;
