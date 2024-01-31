

import Itemcreation from './components/task/Itemcreation'
// import Form from './components/hookform/Form';
// import Home from './components/hookform/Home';
// import Home from './components/MedicineTask/Home';
import MapinLIst from './components/Practice/MapinLIst';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Object from './components/task/Object';
import BookTicket from './components/task/BookTicket';
import { NewContext } from './components/contextapi/NewContext';
import Mycontext from './components/contextapi/Mycontext';
import HorizontalLinearStepper from './components/contextapi/Stepeer';
import MuiStepper from './components/stepper task/MuiStepper'
import Navbar from './components/router/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from '../src/components/router/About'
import Contact from './components/router/Contact'
import Child1 from './components/router/Child1';
import Child2 from './components/router/Child2';
import Email from './components/router/Email';
import PhoneNo from './components/router/PhoneNo';
import Feedback from './components/MedicineTask/Feedback';
import Drawer from './components/Drawer/MiniDrawer';
import Stared from './components/Drawer/Stared';
// import Home from './components/Drawer/Home';
import Dashbord from './components/Drawer/Dashbord'
import Questions from './components/Drawer/Questions';
import Form from './components/HookformValidation/Form';
import TAblewithQr from './components/task/TAblewithQr';
import ParentCallback from './components/useCallback/ParentCallback';
// import Home from './components/BikeTask/Home'
import Home from './components/Appointment/Home';


function App() {


  const [text, setText] = useState('');
  return (
    <div className="App ">
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} >
          <Route path='email' element={<Email/>}/>
          <Route path='phone' element={<PhoneNo/>}/>
        </Route>
        <Route path='about' element={<About/>}>
          <Route index element={<Child2/>}/> 
          <Route path='child1' element={<Child1/>} />
          <Route path='child2' element={<Child2/>} />
        </Route>

      </Routes> */}

      {/* Feedback**************** */}
      {/* <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/stared' element={<Stared />} />
        <Route path='/question' element={<Questions/>}/>
      </Routes> */}

      {/* Usecallback */}
      {/* <ParentCallback/> */}


      {/* Bike repairing Task */}
      {/* <Home/> */}

      {/* <Form /> */}

      {/* TAblewithQr */}
      {/* <TAblewithQr /> */}

      {/* <NewContext.Provider value={{ text, setText }} >
        <Mycontext></Mycontext>
      </NewContext.Provider> */}

      <Home/>
      {/* <Feedback/> */}
      {/* <Object/> */}
      {/* <h1>{data}</h1>
      <button onClick={changedata}>Change</button> */}

      {/* <MuiStepper/> */}

      
    </div>
  );
}

export default App;
