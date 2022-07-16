import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductObject {
    id: number ;
    name:string ;
    price: number;
    description:string;
    images: Array<string>;
    categories: Array<string>
}
export interface CartObject{
    product: ProductObject | void;
    quantity: number;
}

export interface CartState {
  cart: Array<CartObject>
}

const initialState: CartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'myCart',
  initialState, 
  reducers: {
    add: (state, action: PayloadAction) => {
      const isExist = state.cart.filter((item)=> item.product['id'] === action.payload['id']).length;
      if(!isExist){
       state.cart.push({'product': action.payload, quantity: 1 });
      }
    },
    remove: (state, action: PayloadAction) => {
      state.cart = state.cart.filter((item)=> item.product['id'] !== action.payload);
    },
    changeQuantity: (state, action )=> {
      console.log(action)
      for (let x=0; x <= state.cart.length-1; x++ ){
        console.log(state.cart[x].product['id'], action.payload['id'])
        if(state.cart[x].product['id'] === action.payload['id']){
          state.cart[x].quantity = action.payload.event;
          break;
        }
      }
    },
      
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, changeQuantity} = cartSlice.actions

export default cartSlice.reducer