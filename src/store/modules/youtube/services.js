async function getYoutube() {
  const youtubeRes = await fetch(`/api/youtube`);
  const youtubes = await youtubeRes.json();

  if (!youtubes) {
    return {
      notFound: true,
    };
  }

  return youtubes;
}

export default {
  getYoutube,
};
