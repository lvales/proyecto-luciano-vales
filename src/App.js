import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import CartContextProvider from './context/CartContext';

function App() {

  return (
    <div className="App">
   <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={'/'} element={<ItemListContainer message='Bienvenido a .Shop' banner={true}/>} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer  message='Productos por categoría' banner={false}/>} />
            <Route path={'/item/:itemId'} element={<ItemDetailContainer />} />
            <Route path={'*'} element={<Error404 />} />
          </Routes>
          <Footer />  
        </BrowserRouter>  
   </CartContextProvider>      
    </div>
  );
}

export default App;
