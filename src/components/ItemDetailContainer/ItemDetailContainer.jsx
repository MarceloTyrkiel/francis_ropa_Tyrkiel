//ts-check
import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {

const[loading, setLoading] = useState(true)  
const[error, setError] = useState(false)
const[articulosDetalle,setArticulosDetalle] = useState({})
let {idItem} = useParams();

useEffect(() => {
  const db = getFirestore();
    
  const articulos = doc(db, 'items', `${idItem}` );
  
  getDoc(articulos).then((res) =>{ 
      setArticulosDetalle({...res.data(), id: res.id});
  })
  
  .catch((err)=>{
    setError(true);
  })

  .finally(()=>{
    setLoading(false);
  })

  }, [idItem]);

  return (
    <>
      <div>
          {loading && "Loading...."}
          {error && "No te quedes esperando..."}
          <div className="contenedorDetalle d-flex justify-content-center">
              
             {articulosDetalle && <ItemDetail articulosDetalle={articulosDetalle}/>}
          </div>
      </div>
    </> 
  )
}
