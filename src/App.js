
import './App.css';
   import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
 import Home from './Components/Home/Home'
import Iphone from './Components/phones/Iphone';
import Samsung from './Components/phones/Samsung';
import MobileSkins from './Components/phones/MobileSkins';
import LaptopSkin from './Components/navbar/LaptopSkin';
import Dilivary from './Components/footer/Dilivary';



function App() {
  return (



    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='mobileskins' element={<MobileSkins/>}/>
        <Route path='iphone' element={<Iphone/>}/>
        <Route path='samsung' element={<Samsung/>}/>
        <Route path='laptopskins' element={<LaptopSkin/>}/>
        <Route path='dilivery' element={<Dilivary/>}/>
      </Routes>
 
    </div>

  );
}

export default App;
