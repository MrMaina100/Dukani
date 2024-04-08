import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export const LOCAL_STORAGE_KEY = 'dukaniCart';

type ProductState = {
  cart: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
  }[];
  total: number;
};

const initialState: ProductState = {
  //@ts-ignore
  cart: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingCartItem = state.cart.find(
        (product) => product.id === productToAdd.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    addNumberOfItemsInCart: (state, action: PayloadAction<number>) => {
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      }
    },

    deleteNumberOfItemsInCart: (state, action: PayloadAction<number>) => {
      const productToMinus = state.cart.find(
        (item) => item.id === action.payload
      );
      if (productToMinus && productToMinus.quantity > 1) {
        productToMinus.quantity -= 1;
      }
    },

    removeItemsFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (cartProduct) => cartProduct.id !== action.payload
      );
    },

    getTheTotalSumInCart: (state) => {
      state.total = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  deleteNumberOfItemsInCart,
  addNumberOfItemsInCart,
  getTheTotalSumInCart,
  removeItemsFromCart,
} = cartSlice.actions;

export const selectAllcartProducts = (state: RootState) => state.cart.cart;
export const selectCartTotal = (state: RootState) => state.cart.total;
export default cartSlice.reducer;
