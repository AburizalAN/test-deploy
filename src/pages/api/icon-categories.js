import { BASE_URL } from 'utils/constant';

export default async function getStaticProps(req, res) {
  const respond = await fetch(BASE_URL + '/categories_general');
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}
