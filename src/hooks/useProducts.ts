import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('https://dummyjson.com/products');
  return data.products;
};

export const useProducts = () => {
  return useQuery(['products'], fetchProducts);
};
