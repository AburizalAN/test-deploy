import { MICROSERVICE_BASE_URL, WEBSITE_URL } from '../utils/constant';
import { globby } from 'globby';

const EXTERNAL_DATA_URL = `${WEBSITE_URL}/api/product-category/2?pageSize=0`;
const EXTERNAL_DATA_URL_POSTS = `${WEBSITE_URL}/api/article/posts?per_page=100`;
const EXTERNAL_DATA_URL_RECIPES = `${MICROSERVICE_BASE_URL}/recipe?per_page=100`;

function generateSiteMap({
  product = {},
  staticPages = {},
  artikel = [],
  resep = [],
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map((url) => {
        const path = url
          .replace('src/pages', '')
          .replace('.jsx', '')
          .replace('.js', '');
        // const route = path === '/index' ? '' : path;
        const regex = /\/index+/g;
        const route = path.replace(regex, '');
        return `
          <url>
            <loc>${WEBSITE_URL}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })}
     ${product
       .map(({ custom_attributes }) => {
         const filtered = custom_attributes.filter(function (datum) {
           return datum.attribute_code === 'url_key';
         });

         const value = filtered[0].value;
         return `
       <url>
           <loc>${`${WEBSITE_URL}/product/${value}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>
     `;
       })
       .join('')}
       
         ${artikel
           .map((data) => {
             return `
       <url>
           <loc>${`${WEBSITE_URL}/article/${data.slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>
     `;
           })
           .join('')}
      ${resep
        .map((data) => {
          return `
       <url>
           <loc>${`${WEBSITE_URL}/resep/${data.slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>
     `;
        })
        .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const requestPosts = await fetch(EXTERNAL_DATA_URL_POSTS);
  const requestRecipes = await fetch(EXTERNAL_DATA_URL_RECIPES);
  const product = await request.json();
  const posts = await requestPosts.json();
  const recipes = await requestRecipes.json();

  const pages = await globby([
    'src/pages/**/**/*.js',
    '!src/pages/_*.js',
    'src/pages/**/**/*.jsx',
    '!src/pages/_*.jsx',
    '!src/pages/api',
    '!src/pages/404.js',
    '!src/pages/sitemap.xml.js',
    '!src/pages/account/address/edit/[addressId].js',
    '!src/pages/account/order/[orderId].js',
    '!src/pages/category/[slug].js',
    '!src/pages/product/[slug].js',

    '!src/pages/artikel/[slug].js',
    '!src/pages/artikel/index.js',
    '!src/pages/artikel/search/[keywoard].js',
    '!src/pages/artikel/kategori/[list].js',
    '!src/pages/resep/index.js',
    '!src/pages/resep/[slug].js',
    '!src/pages/resep/tips/index.js',
    '!src/pages/resep/categories/[category].js',
    '!src/pages/recipe/detail/[slug].jsx',
    '!src/pages/recipe/[catalog]',
    '!src/pages/shopping/detail-order/[order_id].jsx',
  ]);

  // We generate the XML sitemap with the product data
  const sitemap = generateSiteMap({
    product: product.data.items,
    artikel: posts.data,
    resep: recipes,
    staticPages: pages,
  });

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
