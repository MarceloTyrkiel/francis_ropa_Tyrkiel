import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import {Container} from "react-bootstrap" 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemList({articulos}) {
  return (
 
   <Container >
      <div className ="d-flex align-content-end flex-wrap" >
        {
           articulos.map((articulo) => (<Item key={articulo.id} articulo={articulo}/>)
           )
        }
      </div>
    </Container> 
    
  )
};  
