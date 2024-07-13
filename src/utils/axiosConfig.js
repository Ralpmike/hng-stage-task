// src/utils/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    organization_id: '319d2ed9ea9f4670a9be5f288c2956ef',
    reverse_sort: 'false',
    Appid: 'W0E1NNTU0MHD2CQ',
    Apikey: 'd3503c316eaf49cfa41ab9abb878810220240712170834305276',
  }
});


export default axiosInstance;


// 'https://timbu-get-all-products.reavdev.workers.dev/'
