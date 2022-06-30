//ts-check
import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";


export default function ItemListContainer() {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulos,setArticulos] = useState([])
let {idCategory} = useParams();

let articulo;
useEffect(()=>{

    const arrayMock = [{id: "1", title: "Lenceria femenina",description:"Body", price:1000, pictureURL:"/assets/img/L5700.jpg", category:"Body", stock: 10},
                       {id: "2", title: "Lenceria femenina",description:"Conjuntos", price:1500, pictureURL:"/assets/img/L5701.jpg", category:"Conjunto", stock:15},
                       {id: "3", title: "Lenceria femenina",description:"Corpiños", price:2000, pictureURL:"/assets/img/L5702.jpg", category:"Corpiño",stock:20},
                       {id: "4", title: "Trajes de baño",description:"Bikinis", price:2000, pictureURL:"/assets/img/A0048.jpg", category:"Mallas",stock:25},]

   // eslint-disable-next-line react-hooks/exhaustive-deps
   articulo = new Promise ((res, rej) => {
        
    setTimeout(() => {
        res(
                  articulo = arrayMock.filter((item)=> item.category === idCategory)
           );
      }, 2000);
     }); 
     
      articulo.then((resultado)=>{
       if (!idCategory){ 
          setArticulos(arrayMock)
       }else{
     //     setArticulos(arrayMock)
          setArticulos(resultado);
       }
})
      .catch((err)=>{
        setError(true);
      })

      .finally(()=>{
        setLoading(false);
      });
    },[idCategory]);

  return (
    <>
      <div>
          {loading && "Loading...."}
          {error && "No te quedes esperando..."}
          {articulos && <ItemList articulos={articulos}/>}
      </div>
    </> 
   )
  }
