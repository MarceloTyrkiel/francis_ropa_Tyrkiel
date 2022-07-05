import React from 'react'
import {Card, Figure,Button} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"

export default function ItemDetail({articulosDetalle}) {
  function onAdd(auxStock){


    alert ("Quiero agregar " + auxStock + " de " + articulosDetalle.description)
  

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
            <div className="d-grid gap-2 mt-1">
            <Link to={'/cart'}>            
                <Button variant="outline-secondary" size="sm">Finalizar compra</Button>
             </Link>    
            </div>
          </Figure>
        </div>
        <div >
          <Card style={{ width: '18rem' }}>
          
            <Card.Body>
              <Card.Title>{articulosDetalle.title}</Card.Title>
              <Card.Text >
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


//<Link to={'/cart'}>