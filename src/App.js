import './main.scss'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarBootstrap from './components/NavBarBootstrap/NavBarBootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./components/CartContext/CartContext"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes'


function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBarBootstrap/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path="/productos/:categoryID" element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
            <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
