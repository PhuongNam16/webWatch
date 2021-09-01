import axios from "axios";

const instance = axios.create ({
  baseURL: 'https://serverwatchclock.herokuapp.com/api/v1',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
export const getProduct = () => instance.get('/getproduct');
export const searchProductByName = (params) => instance.post('/getproductbyname',params);
export const pagination = (param) => instance.get('/listproduct&page='+ param.page + '&limit=' + param.limit);
export const authentication = (params) => instance.post('/loginAdmin',params);