import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


export default function ItemList({articulos}) {
  return (
 
    <div className="contenedor">
        {
           articulos.map((articulo) => (<Item key={articulo.id} articulo={articulo}/>)
           )
          
        }
    </div>
  
  )

};
