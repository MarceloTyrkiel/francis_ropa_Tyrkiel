import React ,{createContext} from 'react';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState(() => {
    const cartGuardadas = localStorage.getItem('cart'); 
  
    try {
        return cartGuardadas ? JSON.parse(cartGuardadas) : [];
    } catch(err){
        console.log(err);
    }
  });
   
    useEffect(()=>{
       localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
 

  function addItem(articulosDetalle, auxStock){
    
     if (isInCart(articulosDetalle.id)){
      let articulosDetalleAux = cart;
      let indx = articulosDetalleAux.findIndex(element => element.id === articulosDetalle.id);
     
     if(articulosDetalleAux[indx].auxStock + auxStock > articulosDetalle.stock) {
        return swal({
                title:"Lo sentimos",
                text:"Lamentablemente no hay stock",
                icon:"info",
                timer:"1000"
        });
    }


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

