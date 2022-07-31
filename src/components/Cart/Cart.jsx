import React, {useContext} from 'react';
import  {CartContext}  from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import {Container, Button, Table} from 'react-bootstrap';
import  "./Cart.css"
import swal from 'sweetalert';

export default function CartProvider() {
  const {cart, removeItem,clear} = useContext(CartContext); 
   const cartel=(()=>{
      swal({
        title:"El carrito esta vacio",
        text:"Home",
        icon:"success",
        timer:"2000",
      })
   })

   return (
    <div>
      {cart.length ?
      <>
        <Container>
          <Table responsive striped bordered hover >
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Articulo</th>
                <th>Precio unitario</th>
                <th>Subtotal</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cart.map( x => <div key={x.id}> {x.auxStock} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.category} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> {x.Articulo} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> $ {x.price} </div>)}</td>
                <td>{cart.map( x => <div key={x.id}> $ {x.total} </div>)}</td>
                <td className="mis-botones">{cart.map( x => <button key={x.id} onClick={()=> removeItem(x.id)}>X</button>)}</td>
              </tr>
            </tbody>
          </Table>
            <div className="comprar mt-3">
              <span>El total de tu carrito de compras es : $ {cart.reduce((p, c) => p + c.total,0)}</span>
              <Link to={'/checkout'}>
                 <Button className="estilo-boton mt-3" variant="secondary">Comprar</Button>{' '}  
              </Link>
              <div className='mt-3'>
                  <Button onClick={()=> clear()}>Vaciar el carrito</Button>
              </div>    
            </div>    
        </Container>
      </>
      :
      <>
           <Container>
               {cartel()}
                <Link to={'/'}>
                    <Button variant="outline-secondary mt-4" size="sm">Si quiere comprar , clickee aqui</Button>
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
 <Button onClick={()=> cartel()}>Vaciar el carrito</Button>
*/    