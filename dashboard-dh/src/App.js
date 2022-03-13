import './App.css';
import Navbar from './components/Navbar';


function App() {
  const links = ['usuarios', 'productos', 'categorias']
  return (
    <div className="App">
      <header>
        <Navbar links={links}/>
 
      </header>
    </div>
  );
}

export default App;
