import React from 'react'
import {Card, Figure} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({articulosDetalle}) {
  function onAdd(){
    console.log("Agregaste un producto")
  }
  return (
    <>
        <div>
          <Figure>
              <Figure.Image
              width={250}
              height={400}
              alt="171x180"
              src={articulosDetalle.pictureURL}
            />
            <Figure.Caption>
              Articulo elegido : {articulosDetalle.id}
            </Figure.Caption>
          </Figure>
        </div>
        <div >
          <Card style={{ width: '20rem' }}>
          
            <Card.Body>
              <Card.Title>{articulosDetalle.title}</Card.Title>
              <Card.Text>
                  {articulosDetalle.description}
              </Card.Text>
              <Card.Text>
                Conjunto de encaje y tricot. Corpiño top triangulito con espalda regulable y cola less 
                Talles 90 al 105.
                Colores: Blanco / Negro / Rosa vintage / Verde militar
              </Card.Text>
              <Card.Text>
                  Precio : $ {articulosDetalle.price}
              </Card.Text>
              <ItemCount stock={articulosDetalle.stock} inicial = {1} onAdd={onAdd}/>
            </Card.Body>
          </Card>
        </div>
         
    </>  
  )
}


