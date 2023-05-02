import type { IProductsData } from '../models/types';
import axiosInstance from './index';

export const getProducts = () => {
  return axiosInstance.get<IProductsData[]>('products').then((r) => r.data);
};
