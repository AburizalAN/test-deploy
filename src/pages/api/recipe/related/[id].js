import { MICROSERVICE_BASE_URL } from 'utils/constant';

export default async function getStaticProps(req, res) {
  const { id } = req.query;

  const respond = await fetch(
    `https://micro-blog.awalmula.co/wp-json/contextual-related-posts/v1/posts/${id}/`
  );
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}
