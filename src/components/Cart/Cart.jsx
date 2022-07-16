import React, {useContext} from 'react';
import  {CartContext}  from '../../Context/CartContext';

export default function CartProvider() {
  const {cart, removeItem} = useContext(CartContext); 

  return (
    <div>
    <ul>
        {cart.length && cart.map(x=>
        <div>
          <li key={x.id}>{x.description} precio:{x.price} count:{x.auxStock}</li>
        </div>
      )} 
    </ul>
    </div>
  )
}