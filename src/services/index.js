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
