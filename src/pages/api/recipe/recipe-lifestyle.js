import { BASE_URL } from 'utils/constant';

export default async function getServerSideProps(req, res) {
  const { catalog } = req;
  console.log('ini di midelwer ' + catalog);
  const respond = await fetch(BASE_URL + '/lifestyle');
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}
