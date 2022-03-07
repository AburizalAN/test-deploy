import { TOKEN } from 'utils/constant';

async function postAddToCart(bodies) {
  const options = await {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(bodies.body),
  };

  const addtocartRes = await fetch(`/api/cart/add-to-cart`, options);
  const addtocarts = await addtocartRes.json();

  if (!addtocarts) {
    return {
      notFound: true,
    };
  }

  return addtocarts;
}

export default {
  postAddToCart,
};
