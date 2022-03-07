import Cookie from 'js-cookie';
var token = Cookie.get('AMToken');

export const ADDRESSES_LABEL = [
  'Rumah',
  'Kantor',
  'Apartment',
  'Kos',
  'Lainnya',
];

export const TOKEN = token;
export const BASE_URL = 'https://micro-blog.awalmula.co/wp-json/wp/v2';
export const MICROSERVICE_BASE_URL =
  'https://micro-blog.awalmula.co/wp-json/wp/v2';

export const MAGENTO_BASE_URL =
  `${process.env.API_URL}/rest/V1` ||
  'https://staging-cuan.awalmula.co/rest/V1';
export const IMAGE_URL_STAGING =
  process.env.NEXT_PUBLIC_BASE_IMAGE_URL ||
  'https://staging-cuan.awalmula.co/pub/media/catalog/product';

export const hiddenProd = false;

export const MAGENTO_USERNAME = process.env.MAGENTO_USERNAME || 'admin';
export const MAGENTO_PASS = process.env.MAGENTO_PASS || 'admin123';
export const WEBSITE_URL =
  process.env.WEBSITE_URL || 'https://www.awalmula.co.id';
