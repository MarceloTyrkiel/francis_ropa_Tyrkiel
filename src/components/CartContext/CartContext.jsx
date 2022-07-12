import React from 'react';
import { useState } from 'react';


export const myContext = React.createContext({
  addItem: ()=> undefined,
});


 
export default function CartContext({children}) {
  
 
  const [cart, setCart]= useState([]);
  const [quantity, setquantity] = useState(0)
 

  function addItem(articulosDetalle, auxStock){
  //console.log(`Este es auxStock ${auxStock}`)
  //console.log(articulosDetalle)
  //console.log(articulosDetalle)
  
    const InCart = cart.find(item =>{
      return item.id === articulosDetalle.id
    })
    console.log(InCart)

    if(InCart){
        setCart(
          cart.map(item => {
            if(item.id === articulosDetalle.id){
              return{...InCart, auxStock }
            } else return item
          })
        )
    } else {  
        setCart([...cart, articulosDetalle, auxStock])
    }
    setquantity(quantity + 1)
  }
  console.log(cart)


  function isInCart(){
  }
  
  function removeItem(articulosDetalle){
      const removeArticulo = cart.filter(item => item.id !== articulosDetalle.id )
  
      if(removeArticulo){
        setCart(removeArticulo)
      }
    }
  
    function clear(){
      setCart([])
  }
  
  
  
  return (
    <>
      <myContext.Provider value={{cart,isInCart,addItem,removeItem,clear}}>
        {children}
      </myContext.Provider>
    </>
  )
}

