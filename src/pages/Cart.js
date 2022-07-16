import React from'react' //{ useEffect, useState } from 'react';
import { 
  CartContainer,
  ProductCartContainer
} from '../components/Cart/CartStyles';
import { useSelector } from 'react-redux';
//import { cartMockData } from '../mock/mockData';
import { ItemCart } from '../components/Cart/ItemCart';
import { SummaryConponent } from '../components/SummaryComponet/SummaryComponent';

export const Cart = () => {
  const cart = useSelector((state)=>state.cart.cart);
  
  return (
    <CartContainer>
      <ProductCartContainer>
        <h3>Shopping Cart</h3>
        <hr/>
        <table>
          <thead>
            <tr>
              <th>Product details</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            { cart ?
              cart.map((item, key ) => 
                (<ItemCart key={key} item = {item} />)
              )
              : ''
            }
          </tbody>
        </table>
      </ProductCartContainer> 
      <SummaryConponent items={cart} />
      
    </CartContainer>
  )
}
