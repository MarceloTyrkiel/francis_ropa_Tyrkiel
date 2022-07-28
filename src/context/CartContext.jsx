import React ,{createContext} from 'react';
import { useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);

  function addItem(articulosDetalle, auxStock){
     if (isInCart(articulosDetalle.id)){
      let articulosDetalleAux = cart;
      let indx = articulosDetalleAux.findIndex(element => element.id === articulosDetalle.id);
      articulosDetalleAux[indx]["auxStock"] += auxStock;
      articulosDetalleAux[indx]["total"] += auxStock * articulosDetalle.price;
      setCart([...articulosDetalleAux])
   } else {
      setCart([...cart,{...articulosDetalle,auxStock, total: articulosDetalle.price * auxStock}])
   
   }
  }
    
  function isInCart(id){
     return cart.find((element) => element.id === id)
  }
  
  function removeItem(id){
      setCart(cart.filter(item => item.id !== id ))
 }
   
    function clear(){
      setCart([]);
  }
       
  return (
    <>
      <CartContext.Provider value={{isInCart, addItem, removeItem ,clear, cart}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

