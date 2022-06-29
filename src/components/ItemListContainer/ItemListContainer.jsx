//ts-check
import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"

export default function ItemListContainer() {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulos,setArticulos] = useState([])
let {idCategory} = useParams();



let articulo;
useEffect(()=>{

    const arrayMock = [{id: 1, title: "Body",description:"Articulo L5700", price:1000, pictureURL:"http://placeimg.com/200/200/people", category:"Body"},
                       {id: 2, title: "Body",description:"Articulo L5701", price:1500, pictureURL:"http://placeimg.com/200/200/Nature", category:"Body"},
                       {id: 3, title: "Conjunto",description:"Articulo L5702", price:2000, pictureURL:"http://placeimg.com/200/200/animals", category:"Conjunto"},]
                     

   // eslint-disable-next-line react-hooks/exhaustive-deps
   articulo = new Promise ((res, rej) => {
        
    setTimeout(() => {
        res(
            
              articulo = arrayMock.filter((item)=> item.category === idCategory)
        
           );
      
      }, 2000);
     }); 
     
     // let arrayFiltrado = articulo.filter((item)=> item.category === "Body");
     // setArticulos(arrayFiltrado)

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
    <p>
      <Link to={"/category/Body"}>BODY</Link>
    </p>
    <p>
      <Link to={"/category/Conjunto"}>CONJUNTO</Link>
    </p>
     
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