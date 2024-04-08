import {configureStore, createListenerMiddleware, isAnyOf} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { fakeStoreApi } from '@/apis/fakeStoreApi'
import cartReducer, {addToCart, addNumberOfItemsInCart, deleteNumberOfItemsInCart, removeItemsFromCart, getTheTotalSumInCart, LOCAL_STORAGE_KEY} from '@/features/cart/cartSlice'

const localStorageMiddleware = createListenerMiddleware()

localStorageMiddleware.startListening({
   matcher: isAnyOf(addNumberOfItemsInCart, addToCart,deleteNumberOfItemsInCart, removeItemsFromCart, getTheTotalSumInCart ),
   //@ts-ignore
   effect: (action, listenerApi) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listenerApi.getState().cart.cart))

})


export const store = configureStore({
   reducer:{
      [fakeStoreApi.reducerPath] : fakeStoreApi.reducer,
      cart: cartReducer

   },
   middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
   .concat(fakeStoreApi.middleware)
   .prepend(localStorageMiddleware.middleware)
  
     
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch