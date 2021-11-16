import './App.css';
import Cub2 from './Components/Cub2';
import Cube from './Components/Cube';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import ListaJuegos from './Components/ListaJuegos';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div>
      <Hero></Hero>
      <Cub2></Cub2>
      <ListaJuegos></ListaJuegos>
      <Cube></Cube>
      {/* <Pricing></Pricing> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
