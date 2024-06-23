import logo from './logo.svg';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import { Route, Routes } from 'react-router-dom';
import View from './COMPONENTS/View';
import Add from './COMPONENTS/Add';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
        <Route path='/view' element={<View/>}/>
        <Route path='/add' element={<Add data={{ename:"",eage:"",eposition:"",esalary:""}} method="/post"/>}/>
        </Routes>

    </div>
  );
}

export default App;
