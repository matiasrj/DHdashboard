import './App.css';
import Contenido from './components/Contenido';
// import './public/css/styles';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  const links = ['usuarios', 'productos', 'categorias']
  return (

    <div className="App">
      <header>
        <Navbar links={links}/>
      </header>

      <Contenido/>

      <Footer/>
    </div>
  );
}

export default App;
