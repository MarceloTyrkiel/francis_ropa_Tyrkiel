import React , {useContext} from 'react';
import {Card, Figure,Button} from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import {CartContext} from '../../Context/CartContext';

export default function ItemDetail({articulosDetalle}) {

 const {pictureURL,title,description,price,Articulo} = articulosDetalle 
 const {addItem}  = useContext(CartContext)
 const {cart}  = useContext(CartContext) 
 
 
  function onAdd(auxStock){
    addItem(articulosDetalle, auxStock);
  }

  return (
    <>
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
                  {description}
              </Card.Text>
              <Card.Text>
                Conjunto de encaje y tricot. Corpiño top triangulito con espalda regulable y cola less 
                Talles 90 al 105.
                Colores: Blanco / Negro / Rosa vintage / Verde militar
              </Card.Text>
              <Card.Text>
                  Precio : $ {price}
               
              </Card.Text>
                   
              <ItemCount stock={articulosDetalle.stock} inicial = {1} onAdd={onAdd}/>
               
            </Card.Body>
          </Card>
        </div>
        
    </>  
  )
}


