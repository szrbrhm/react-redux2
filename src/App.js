
import './App.css';
import Computer from './components/Computer';
import Laptop from './components/Laptop';
import Phone from './components/Phone';
import Watch from './components/Watch';

function App() {
  return (
    <div className="App">
     <h1>Clarus Shop</h1>
     <Laptop/>
     <Phone/>
     <Computer/>
     <Watch/>
    </div>
  );
}

export default App;
