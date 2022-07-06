import React from 'react'
import {Card,} from "react-bootstrap"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item({articulo}) {
  return (
    <div >
      <>
              <Card style={{ width: '20.3rem' }}>
                <Card.Img variant="top" src={articulo.pictureURL}/>
                <Card.Body>
                  <Card.Title>{articulo.title}</Card.Title>
                  <Card.Text>
                      {articulo.description}
                  </Card.Text>
                  <Card.Text>
                      Stock disponible : {articulo.stock}
                  </Card.Text>
                  <Link to={`item/${[articulo.id]}`}>
                      Ver detalle del producto
                  </Link>
                </Card.Body>
              </Card>
      </>
    </div>  
  )
}
//<Link to={`item/${articulo.id}`}>Ver detalle del producto</Link>
