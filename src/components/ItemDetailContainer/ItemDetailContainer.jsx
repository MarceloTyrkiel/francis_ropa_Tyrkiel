//ts-check
import React, {useEffect,useState} from 'react'

import ItemDetail from '../ItemDetailContainer/ItemDetail';
import {useParams} from "react-router-dom";


export default function ItemDetailContainer() {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulosDetalle,setArticulosDetalle] = useState({})
let {idItem} = useParams();



let articuloElegido;
useEffect(()=>{

    const arrayMock = [{id: "1", title: "Body",description:"Articulo L5700", price:1000, pictureURL:"http://placeimg.com/200/200/people", category:"Body", stock:10},
                       {id: "2", title: "Body",description:"Articulo L5701", price:1500, pictureURL:"http://placeimg.com/200/200/Nature", category:"Body", stock:15},
                       {id: "3", title: "Conjunto",description:"Articulo L5702", price:2000, pictureURL:"http://placeimg.com/200/200/animals", category:"Conjunto", stock:20}]
                     

   // eslint-disable-next-line react-hooks/exhaustive-deps
   articuloElegido = new Promise ((res, rej) => {
        
    setTimeout(() => {
        res(
            articuloElegido = arrayMock.find((item)=> item.id === idItem)
           );
      
      }, 2000);
     }); 
     
     // let arrayFiltrado = articulo.filter((item)=> item.category === "Body");
     // setArticulos(arrayFiltrado)

      articuloElegido.then((resultado)=>
        setArticulosDetalle(resultado)
      )

      .catch((err)=>{
        setError(true);
      })

      .finally(()=>{
        setLoading(false);
      });
    },[idItem]);


  return (
    <>
         
      <div>
          {loading && "Loading...."}
          {error && "No te quedes esperando..."}
          {articulosDetalle && <ItemDetail articulosDetalle={articulosDetalle}/>}
      </div>
    </> 
    
  )
  }
//Saque este llamado del desafio anterior   
//  <div>{saludo}</div> 