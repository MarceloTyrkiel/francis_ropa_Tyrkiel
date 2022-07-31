import React from 'react'
import {Card, Button, Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item({articulo}) {
  return (
    <div >
       <>
          <Row>
            <Col>
              <Card style={{ width: '20.2rem' }}>
                <Card.Img variant="top" src={articulo.pictureURL}/>
                <Card.Body>
                  <Card.Title>{articulo.category}</Card.Title>
                  <Card.Text>
                      Articulo : {articulo.Articulo}
                  </Card.Text>
                  <Card.Text>
                      Stock disponible : {articulo.stock}
                  </Card.Text>
                  <Link to={`/item/${[articulo.id]}`}>
                      <Button variant="outline-secondary" size="sm">Agregar al carrito</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </>
    </div>  
  )
}

