import React , {useState} from 'react'
import {Card, Button,Container} from "react-bootstrap"

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
   <Container>
        <hr class="mt-3"/>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Conjunto de Ropa Interior</Card.Title>
            <Card.Text>
                Body
            </Card.Text>
            
            <row className="d-flex gap-2 justify-content-between mb-3">
                 <Button onClick = {()=> aumentarStock()} variant="outline-dark">+</Button>
                 <p>{auxStock}</p>
                 <Button onClick = {()=> disminuirStock()} variant="outline-dark">-</Button>
            </row>    
            
            <div className="d-grid gap-2">
                <Button  onClick = {()=> onAdd(auxStock)} variant="primary" size="lg">Agregar al carrito</Button>
          
            </div>
        </Card.Body>
        </Card>
        </div>
        
    </Container> 
  )
}
