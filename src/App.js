import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Comp/Navbar/Navbar';
import Home from './Comp/Home/Home';
import Product from './Comp/Product/Product';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
