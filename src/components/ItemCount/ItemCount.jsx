import React , {useState} from 'react'
import {Card, Button} from "react-bootstrap"

export default function ItemCount({stock, inicial, onAdd}) {


  const [auxStock, setAuxStock] = useState(inicial); 

  function aumentarStock(){
    if (auxStock < stock){
      setAuxStock(auxStock + 1);
    }
  }

  function disminuirStock(){
    if (auxStock > 0) {
      setAuxStock(auxStock - 1);
    }
  }

  return (
   <>
        <hr className="mt-3"/>
        <div>
        <Card style={{ width: '17rem' }}>
        <Card.Body>
           
            <span className="d-flex gap-3 justify-content-between mb-3">
                 <Button onClick = {()=> aumentarStock()} variant="light" size="sm">+</Button>
                 <p>{auxStock}</p>
                 <Button onClick = {()=> disminuirStock()} variant="light" size="sm">-</Button>
            </span>    
          
            <div className="d-grid gap-2">
                <Button  onClick = {()=> onAdd(auxStock)} variant="outline-secondary" size="sm">Agregar al carrito</Button>
            </div>
        </Card.Body>
        </Card>
        </div>
        
    </> 
  )
}

