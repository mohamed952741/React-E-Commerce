import api from './api';

export const getPaginatedProducts = async (skip = 0, limit = 10) => {
  const res = await api.get('/products', {
    params: { skip, limit },
  });
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
