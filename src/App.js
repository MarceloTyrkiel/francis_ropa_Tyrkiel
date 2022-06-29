

//@ts-check
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
/*
  let stock = 5;
  let inicial = 1; 

function onAdd(unidades){
  if (unidades > 0) {
    alert("Agregaste " + unidades + " al carrito")
  } else (
    alert("Lamentablemente no hay stock !!! ")
  )
}  
*/  
  return (
    <div>
      <BrowserRouter>
        <div><NavBar/></div>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<NavBar/>