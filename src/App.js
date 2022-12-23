import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer message='Bienvenido a .Shop' />} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
          <Route path={'/item/:itemId'} element={<ItemDetailContainer />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
        <Footer />  
      </BrowserRouter>        
    </div>
  );
}

export default App;
