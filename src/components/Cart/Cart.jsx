import React, {useContext} from 'react';
import  {CartContext}  from '../../context/CartContext';

export default function Cart() {
  const {cart, removeItem} = useContext(CartContext); 

  return (
    <ul>
        <div>Cart</div>
      {cart.lenght && cart.map(item=>
        <div>
          <li key={item.id}>{item.title} count: {item.quantity}</li>
          <button onClick={()=> removeItem(item.id)}>Eliminar</button>
        </div>
      )} 
    </ul>
  )
}