import './App.css';
import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ItemListContainer mensaje='Bienvenido a Shop' />
    </div>
  );
}

export default App;
