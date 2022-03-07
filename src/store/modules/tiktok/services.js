async function getTiktok() {
  const tiktokRes = await fetch(`/api/tiktok`);
  const tiktoks = await tiktokRes.json();

  if (!tiktoks) {
    return {
      notFound: true,
    };
  }

  return tiktoks;
}

export default {
  getTiktok,
};
