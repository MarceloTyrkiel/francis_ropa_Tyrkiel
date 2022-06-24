import React from 'react'
import {Card} from "react-bootstrap"


export default function ItemDetail({articulosDetalle}) {
  
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
        </Card.Body>
      </Card>
    </div>  
  )
}


