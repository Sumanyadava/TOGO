import Entry from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Test from './pages/test/test';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'


import './App.css';
import Home from './pages/home/Home';
import Tags from './components/sub_todo/tags/Tags';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/home' element={<Entry />} ></Route>
      <Route path='/test' element={<Test />} ></Route>
      {/* <Route path='/error' element={<Error />} ></Route> */}
      <Route path='/admin' element={<Login />} ></Route>

      </Routes>
      
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Entry /> */}
      {/* <Register />  */}
      {/* <Test /> */}
      

      



      

    </div>
  );
}

export default App;
