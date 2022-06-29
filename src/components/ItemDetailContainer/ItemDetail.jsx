import React from 'react'
import {Card} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({articulosDetalle}) {
  function onAdd(){
    console.log("Agregaste un producto")
  }
  return (
    <div >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={articulosDetalle.pictureURL} />
        <Card.Body>
          <Card.Title>{articulosDetalle.title}</Card.Title>
          <Card.Text>
              {articulosDetalle.description}
          </Card.Text>
          <Card.Text>
              {articulosDetalle.price}
          </Card.Text>
          <ItemCount stock={articulosDetalle.stock} inicial = {1} onAdd={onAdd}/>
        </Card.Body>
      </Card>
    </div>  
  )
}


