async function getProductBySearch(param) {
  const searchRes = await fetch(
    `/api/search/` + param.search + '?' + param.page + '&pagesize=3'
  );
  const res = await searchRes.json();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return res;
}

async function getArticleBySearch(param) {
  const searchRes = await fetch(
    `/api/search/article?search=` + param.search + '&page=' + param.page
  );
  const res = await searchRes.json();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return res;
}

async function getResepBySearch(param) {
  const searchRes = await fetch(
    `/api/search/recipe?search=` + param.search + '&page=' + param.page
  );
  const res = await searchRes.json();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return res;
}

async function multipleApiSearch(param) {
  let product = `/api/search/` + param.search + '?' + param.page,
    article =
      `/api/search/article?search=` + param.search + '&page=' + param.page,
    recipe =
      `/api/search/recipe?search=` + param.search + '&page=' + param.page;
  try {
    const allres = await Promise.all([
      fetch(product).then((response) => response.json()),
      fetch(article).then((response) => response.json()),
      fetch(recipe).then((response) => response.json()),
    ]);

    const res = await allres;

    if (!res) {
      return {
        notFound: true,
      };
    }
    const response = { data: res[0], article: res[1], recipe: res[2] };
    return response;
  } catch (error) {
    return error;
  }
}

export default {
  getProductBySearch,
  getArticleBySearch,
  getResepBySearch,
  multipleApiSearch,
};
