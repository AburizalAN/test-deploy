async function getInstagram() {
  const instagramRes = await fetch(`/api/instagram`);
  const instagrams = await instagramRes.json();

  if (!instagrams) {
    return {
      notFound: true,
    };
  }

  return instagrams;
}

export default {
  getInstagram,
};
