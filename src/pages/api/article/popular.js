import { MICROSERVICE_BASE_URL } from 'utils/constant';

async function handlerPostTemanMula(req, res) {
  const respond = await fetch(
    MICROSERVICE_BASE_URL +
      '/posts?filter[meta_key]=post_views&filter[orderby]=meta_value_num&per_page=4&order=desc'
  );
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}

export default handlerPostTemanMula;
