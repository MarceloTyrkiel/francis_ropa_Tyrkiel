


import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import  CartProvider   from './Context/CartContext';
import Cart from "./components/Cart/Cart"

function App() {
 
  return (
    <>
      <CartProvider>
          <BrowserRouter>
            <div><NavBar/></div>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              
          </Routes>
          </BrowserRouter>
      </CartProvider>  
    </>
);
}

export default App;

//<Route path="/cart" element={<CartContext/>}/>