import { TOKEN } from 'utils/constant';

async function getInfo() {
  const options = await {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const infoRes = await fetch(`/api/cart/info-customer`, options);
  const infos = await infoRes.json();

  if (!infos) {
    return {
      notFound: true,
    };
  }

  return infos;
}

async function postTokenFirebaseDatabase(bodies) {
  const options = await {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(bodies.body),
  };

  const url = '/api/notification-firebase';
  const respond = await fetch(url, options).then((res) => res.json());

  if (!respond) {
    return {
      notFound: true,
    };
  }

  return respond;
}

export default {
  getInfo,
  postTokenFirebaseDatabase,
};
