import axios from 'axios';

const configs = {
  baseURL: 'https://api-apa.com', // base url API
};

const http = axios.create(configs);

export default http;
