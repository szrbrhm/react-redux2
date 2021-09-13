
import './App.css';
import Computer from './components/Computer';
import Laptop from './components/Laptop';
import Phone from './components/Phone';

function App() {
  return (
    <div className="App">
     <h1>Clarus Shop</h1>
     <Laptop/>
     <Phone/>
     <Computer/>
    </div>
  );
}

export default App;
