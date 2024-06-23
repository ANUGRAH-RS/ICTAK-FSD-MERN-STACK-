import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './COMPONENTS/Navbar';
import Blog from './COMPONENTS/Blog';
import Addblog from './COMPONENTS/Addblog';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path='/' element={<Blog/>}/>
          <Route path='/add' element={<Addblog/>}/>
          
          </Routes>
    </div>
  );
}

export default App;
