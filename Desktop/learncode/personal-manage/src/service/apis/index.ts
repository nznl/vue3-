import { http } from '../instance';

export const getTestApi = () => http.get('shop/app/Index.htm');