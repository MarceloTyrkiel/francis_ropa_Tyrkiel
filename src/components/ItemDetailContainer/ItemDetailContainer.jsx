import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetailContainer/ItemDetail';

export default function ItemDetailContainer() {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulosDetalle,setArticulosDetalle] = useState({})


let articuloElegido;
useEffect(()=>{

   // eslint-disable-next-line react-hooks/exhaustive-deps
   articuloElegido = new Promise ((res, rej) => {
        
    setTimeout(() => {
      if(Math.random() < 0.5){
        res(
           {id: 1, title: "Body",description:"Articulo L5700", price:1000, pictureURL:"http://placeimg.com/200/200/people"},
           );
      }else{
        rej("ERROR al cargar el producto")}
      }, 2000);
     }); 

      articuloElegido.then((resultado)=>{
        setArticulosDetalle(resultado);
      })

      .catch((err)=>{
        setError(true);
      })

      .finally(()=>{
        setLoading(false);
      });
    },[]);
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