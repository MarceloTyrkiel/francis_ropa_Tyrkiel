import React , {useContext} from 'react'
import { useState } from 'react';
import {collection, getFirestore, addDoc} from 'firebase/firestore';
import  {CartContext}  from '../../Context/CartContext';

export default function Checkout() {
   const {cart} = useContext(CartContext); 
  
   const [nombre, setNombre] = useState('');
   const [tel, setTel] = useState('');
   const [email, setEmail] = useState('');
   const [idCompra, setIdCompra] = useState('');

   function handleClickComprar(){
     const total =  cart.reduce((p, c) => p + c.total,0);

    const pedido = {
        buyer: {nombre:nombre, tel:tel, email:email}, 
        carrito: [{cart}],
        total: {total}
        };
        
       if (!nombre || !tel || !email) return;

       const db = getFirestore();
       const collectionRef = collection(db, 'pedidos');
       addDoc(collectionRef, pedido).then(({id}) => setIdCompra(id));
  }
    return (  
         <div>
            <p>Su id de compra es : {idCompra}</p>
            <h1>Complete para terminar su compra</h1>
            <input onChange={(e)=> setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></input><br/>
            <input onChange={(e)=> setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></input><br />
            <input onChange={(e)=> setEmail(e.target.value)} type={'email'} placeholder={'Ingrese email'}></input><br />
            <br />
            <br />
            <button onClick={handleClickComprar}>Comprar</button>
         </div>
    );
}
