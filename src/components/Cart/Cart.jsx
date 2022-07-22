import React, {useContext} from 'react';
import  {CartContext}  from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {Container} from 'react-bootstrap';
import  "./Cart.css"

export default function CartProvider() {
  const {cart, removeItem} = useContext(CartContext); 

  return (
    <div>
      {cart.length ?
      <>
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descripcion</th>
                <th>Articulo</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Subtotal</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cart.map( x => <div key={x.id}> {x.title} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.description} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.id} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.auxStock} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.price} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.total} </div>)}</td>
                <div class="mis-botones">{cart.map( x => <button onClick={()=> removeItem(x.id)}>Eliminar</button>)}</div>
              </tr>
            </tbody>
          </Table>
              <span>El total de tu carrito de compras es : ${cart.reduce((p, c) => p + c.total,0)}.00</span>
        </Container>
      </>
      :
      <>
           <Container>
            <h1>No tenes productos seleccionados</h1>
                <Link to="/">
                    <span>Haz click para ir al home</span>
                </Link>
            </Container>
      </>
      }
    </div>      
  );
}


/*
<div>
      {cart.length ?
      <>
        <ul>
            {cart.length && cart.map(x=>
            <div>
              <li key={x.id}>{x.description} precio: ${x.price} count:{x.auxStock} total:{x.total}</li>
              <button onClick={()=> removeItem(x.id)}>Eliminar</button>
            </div>
          )} 
        </ul>
          <span>${cart.reduce((p, c) => p + c.total,0)}.00</span>
      </>  
      :
      <Link to="/">
        <span>No tenes productos, click para ir al home</span>
      </Link>}
</div>
*/    