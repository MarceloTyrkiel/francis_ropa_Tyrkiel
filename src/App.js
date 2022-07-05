

//@ts-check
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContext from './components/CartContext/CartContext';

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <div><NavBar/></div>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContext/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<NavBar/>