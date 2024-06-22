import logo from './logo.svg';
import './App.css';
import SignUp from './COMPONENTS/SignUp';
import Navbar from './COMPONENTS/Navbar';
import Register from './COMPONENTS/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './COMPONENTS/StateBasics';
import Count from './COMPONENTS/Count';
import Listmap from './COMPONENTS/Listmap';
import Api from './COMPONENTS/Api';
import SampleUse from './COMPONENTS/SampleUse';
import GetCard from './COMPONENTS/GetCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/SB' element={<StateBasics/>}/>
          <Route path='/CNT' element={<Count/>}/>
          <Route path='LISTMAP' element={<Listmap/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/SUSE' element={<SampleUse/>}/>
          <Route path='/GTCRD' element={<GetCard/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
