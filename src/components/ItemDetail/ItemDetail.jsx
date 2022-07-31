import React , {useContext} from 'react';
import {Card, Figure,Button} from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import {CartContext} from '../../Context/CartContext';

export default function ItemDetail({articulosDetalle}) {

 const {pictureURL,title,description,price,category,Articulo} = articulosDetalle 
 const {addItem}  = useContext(CartContext)
  
  function onAdd(auxStock){
    addItem(articulosDetalle, auxStock);
  }

  return (
    <>
        <div className="d-flex justify-content-center flex-wrap">  
            <div>
              <Figure>
                    <Figure.Image
                    width={250}
                    height={400}
                    alt="171x180"
                    src={pictureURL}
                  />
                  <Figure.Caption>
                      Articulo elegido : {Articulo}
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
                      <Card.Title>{title}</Card.Title>
                      <Card.Text >
                            {category}
                      </Card.Text>
                      <Card.Text>
                            {description}
                      </Card.Text>
                      <Card.Text>
                            Precio : $ {price}
                      </Card.Text>
                          <ItemCount stock={articulosDetalle.stock} inicial = {1} onAdd={onAdd}/>
                  </Card.Body>
                </Card>
            </div>
        </div>
    </>  
  )
}


