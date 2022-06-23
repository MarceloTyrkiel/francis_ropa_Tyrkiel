import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({saludo}) {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulos,setArticulos] = useState([])


let articulo;
useEffect(()=>{

   // eslint-disable-next-line react-hooks/exhaustive-deps
   articulo = new Promise ((res, rej) => {
        
    setTimeout(() => {
      if(Math.random() < 0.5){
        res([
           {id: 1, title: "Body",description:"Articulo L5700", price:1000, pictureURL:"http://placeimg.com/200/200/people"},
           {id: 2, title: "Conjunto",description:"Articulo L5701", price:1500, pictureURL:"http://placeimg.com/200/200/Nature"},
           {id: 3, title: "Corpiño",description:"Articulo L5702", price:2000, pictureURL:"http://placeimg.com/200/200/animals"},
        ]);
      }else{
        rej("ERROR al cargar el producto")}
      }, 2000);
     }); 

      articulo.then((resultado)=>{
        setArticulos(resultado);
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
          {articulos && <ItemList articulos={articulos}/>}
      </div>
    </> 
    
  )
  }
//Saque este llamado del desafio anterior   
//  <div>{saludo}</div> 