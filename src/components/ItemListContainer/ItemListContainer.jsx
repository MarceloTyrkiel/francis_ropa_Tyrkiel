//ts-check
import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

export default function ItemListContainer() {

const[loading, setLoading] = useState(true)
const[error, setError] = useState(false)
const[articulos, setarticulos] = useState([])
let {idCategory} = useParams();

useEffect(() => {
  const db = getFirestore();
 
 //TRAER TODA LA COLECCION 
 const art = idCategory ? query(collection(db, 'items'), where('category', '==' ,'idCategory'))
                        : collection(db,'items');
 
  getDocs(art).then((res) => {
  
  setarticulos(res.docs.map((x)=> ({...x.data(), id: x.id})));
  
  })
  .catch((err)=>{
    setError(true);
  })

  .finally(()=>{
    setLoading(false);
  })
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
