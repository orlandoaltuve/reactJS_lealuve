import './main.scss'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./components/CartContext/CartContex"

import Cart from './components/Cart/Cart';


function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path="/productos/:categoryID" element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
