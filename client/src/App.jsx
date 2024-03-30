import Entry from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Test from './pages/test/test';
import Paper from './pages/paper/Paper'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/signin' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/' element={<Entry />} ></Route>
      <Route path='/test' element={<Test />} ></Route>
      <Route path='/paper' element={<Paper />} ></Route>
      <Route path='/admin' element={<Login />} ></Route>

      {/* <Route path='/error' element={<Error />} ></Route> */}

      </Routes>
      
      </BrowserRouter>
      
      

      



      

    </div>
  );
}

export default App;
