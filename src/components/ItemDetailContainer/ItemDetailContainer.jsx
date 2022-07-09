//ts-check
import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulosDetalle,setArticulosDetalle] = useState({})
let {idItem} = useParams();

let articuloElegido;
useEffect(()=>{

  const arrayMock = [{id: "1", title: "Lenceria femenina",description:"Body", price:1000, pictureURL:"/assets/img/L5700.jpg", category:"Body", stock: 10},
  {id: "2", title: "Lenceria femenina",description:"Conjuntos", price:1500, pictureURL:"/assets/img/L5701.jpg", category:"Conjunto", stock:15},
  {id: "3", title: "Lenceria femenina",description:"Corpiños", price:2000, pictureURL:"/assets/img/L5702.jpg", category:"Corpiño",stock:20},
  {id: "4", title: "Trajes de baño",description:"Bikinis", price:2000, pictureURL:"/assets/img/A0048.jpg", category:"Mallas",stock:25},]

   // eslint-disable-next-line react-hooks/exhaustive-deps
   articuloElegido = new Promise ((res, rej) => {
        
    setTimeout(() => {
        res(
            articuloElegido = arrayMock.find((item)=> item.id === idItem)
           );
      
      }, 1000);
     }); 
     
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
          <div className="contenedorDetalle">
              
             {articulosDetalle && <ItemDetail articulosDetalle={articulosDetalle}/>}
          </div>
      </div>
    </> 
  )
  }
//Saque este llamado del desafio anterior   
//  <div>{saludo}</div> 