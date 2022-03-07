import { BASE_URL } from 'utils/constant';

async function handlerBanners(req, res) {
  const respond = await fetch(BASE_URL + '/banner');
  const bannerShoppingsRes = await fetch(
    BASE_URL + '/banner_shopping/?banner_categories=154'
  );
  const promoPilihanRes = await fetch(
    BASE_URL + '/banner_shopping/?banner_categories=153'
  );
  const backgroundProdukPromoRes = await fetch(
    BASE_URL + '/banner_shopping/?banner_categories=158'
  );
  const fiturBaruRes = await fetch(
    BASE_URL + '/banner_shopping/?banner_categories=156'
  );
  const goodsAndGiftRes = await fetch(
    BASE_URL + '/banner_shopping/?banner_categories=155'
  );
  const promoBrandRes = await fetch(
    BASE_URL + '/banner_shopping/?banner_categories=157'
  );

  const data = await respond.json();
  const bannerShopping = await bannerShoppingsRes.json();
  const promoPilihan = await promoPilihanRes.json();
  const backgroundProdukPromo = await backgroundProdukPromoRes.json();
  const fiturBaru = await fiturBaruRes.json();
  const goodsAndGift = await goodsAndGiftRes.json();
  const promoBrand = await promoBrandRes.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({
    data: data,
    bannerShopping,
    promoPilihan,
    backgroundProdukPromo,
    fiturBaru,
    goodsAndGift,
    promoBrand,
  });
}

export default handlerBanners;
