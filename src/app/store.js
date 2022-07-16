import { configureStore } from '@reduxjs/toolkit'
import cartReducer  from './cart.ts'
import productsReducer  from './products.js'

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      products: productsReducer,
  },
})

