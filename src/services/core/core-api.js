import axios from 'axios';
import { parse, stringfy } from 'qs';
import { onResponseError, onResponseSuccess } from './interceptors';

const api = axios.create({
    baseURL: 'https://65cc2ad5dd519126b83e1754.mockapi.io/api',
    paramsSerializer: {
        econde: parse,
        serialize: stringfy
    }
});

api.interceptors.response.use(onResponseSuccess, onResponseError);

api.defaults.headers.common.Accept = 'application/json'
api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common.credentials = 'include'

export default api;