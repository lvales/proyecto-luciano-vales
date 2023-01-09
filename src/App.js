import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import CartContextProvider from './context/CartContext';
import FavContextProvider from './context/FavContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FavList from './components/FavList';


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <FavContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={'/'} element={<ItemListContainer message='Bienvenido a .Shop' setBanner={true} />} />
              <Route path={'/category/:categoryId'} element={<ItemListContainer message='Productos por categoría' setBanner={false} />} />
              <Route path={'/item/:itemId'} element={<ItemDetailContainer />} />
              <Route path={'/cart'} element={<Cart />} />
              <Route path={'/checkout'} element={<Checkout />} />
              <Route path={'/favorite'} element={<FavList />} />
              <Route path={'*'} element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </FavContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
