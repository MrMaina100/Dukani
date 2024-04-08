import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };

  stripeProductId?: string
  stripePriceId?: string
};

export const fakeStoreApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getAllProducts: build.query<Products[], void>({
      query: () => `/products`,
    }),
    getSingleProduct: build.query<Products, number>({
      query: (id) => `/products/${id}`,
    }),
    getElectronicProducts: build.query<Products[], void>({
      query: () => `products/category/electronics`,
    }),
    getJeweleryProducts: build.query<Products[], void>({
      query: () => `products/category/jewelery`,
    }),
    getMenClothing: build.query<Products[], void>({
      query: () => `products/category/men's clothing`,
    }),
    getWomenClothing: build.query<Products[], void>({
      query: () => `products/category/women's clothing`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetElectronicProductsQuery,
  useGetJeweleryProductsQuery,
  useGetMenClothingQuery,
  useGetWomenClothingQuery,
} = fakeStoreApi;
