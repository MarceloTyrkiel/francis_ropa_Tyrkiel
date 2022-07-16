import React ,{createContext} from 'react';
import { useState } from 'react';


export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);

  function addItem(articulosDetalle, auxStock){
  //console.log(`Este es auxStock ${auxStock}`)
  //console.log(articulosDetalle)
  //console.log(articulosDetalle.title)
    if (isInCart(articulosDetalle.id)){
      let articulosDetalleAux = articulosDetalle;
      let indx = articulosDetalleAux.findIndex(element => element.id === articulosDetalle.id);
      articulosDetalleAux[indx]["auxStock"] += auxStock;
      setCart(articulosDetalleAux)
   } else {
      setCart([...cart,{...articulosDetalle,auxStock}])
      console.log(cart)
   }
  }
    
  function isInCart(id){
     return cart.find((element) => element.id === id)
  }
  
  function removeItem(articulosDetalle){
      setCart(cart.filter(item => item.id !== articulosDetalle.id ))
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

//setCart([...cart,{...articulosDetalle,auxStock}])