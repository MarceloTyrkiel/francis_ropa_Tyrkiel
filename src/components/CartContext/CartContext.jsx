import React from 'react'
import {createContext, useState} from 'react'


export const myContext = createContext(null);
 
export default function CartContext({children}) {
  
 
  const [cart, setCart]= useState([]);
 

  function addItem(auxStock, articulosDetalle){
  console.log(auxStock)
  console.log(articulosDetalle)
  }


  function isInCart(){
  }
  function removeItem(){
  }
  function clear(){
  }
  
  
  
  return (
    <>
      <myContext.Provider value={{isInCart,addItem,removeItem,clear}}>
        {children}
      </myContext.Provider>
      </>
  )
}

