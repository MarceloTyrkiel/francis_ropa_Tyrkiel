import React from 'react'
import {Card, Button} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'

export default function Item({id,price,title,description,pictureURL}) {
  function onAdd(){
    console.log("Agregaste un producto")
  }
  return (
    <div >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
              {description}
          </Card.Text>
          <Card.Text>
              $ {price}
          </Card.Text>
          <Button variant="primary">Detalles</Button>
          <ItemCount stock={5} inicial = {1} onAdd={onAdd}/>
        </Card.Body>
      </Card>
    </div>  
  )
}
