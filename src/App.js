

import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';



function App() {
  let stock = 5;
  let inicial = 1; 

function onAdd(unidades){
  if (unidades > 0) {
    alert("Agregaste " + unidades + " al carrito")
  } else (
    alert("Lamentablemente no hay stock !!! ")
  )
}  
  
  return (
    <div>
      <NavBar/>
      <ItemCount stock={stock} inicial = {inicial} onAdd={onAdd}/>
    </div>
  );
}

export default App;
