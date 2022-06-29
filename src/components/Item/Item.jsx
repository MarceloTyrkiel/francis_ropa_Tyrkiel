import React from 'react'
import {Card, Button} from "react-bootstrap"
//import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"

export default function Item({articulo}) {
 // function onAdd(){
 //   console.log("Agregaste un producto")
 // }

 

  return (
    <div >

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={articulo.pictureURL} />
        <Card.Body>
          <Card.Title>{articulo.title}</Card.Title>
          <Card.Text>
              {articulo.description}
          </Card.Text>
          <Card.Text>
              $ {articulo.price}
          </Card.Text>
          <Link to={"/item/2"}>ARTICULO ELEGIDO</Link>
         
        </Card.Body>
      </Card>
    </div>  
  )
}
//<ItemCount stock={5} inicial = {1} onAdd={onAdd}/>
//<Button variant="primary">Detalles</Button>