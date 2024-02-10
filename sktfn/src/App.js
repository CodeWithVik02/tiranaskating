import { BrowserRouter as Router, Route, Routes , Switch   } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SignUp from './components/Auth/signup';
import Login from './components/Auth/login';
import AuthRoute from './components/Auth/AuthRoute';
import Prices from './components/Pricing';
import Loading from './components/Loading/loading';
import React , {useState} from 'react';
function App() {
  const [loading, setLoading] = useState(false);
  
  return (
  <>
  {loading  === true ? (
   <Loading/>
   
  ):(
  <>
  <Router>
    <Routes>
    
    <Route path="/become-member" element={<AuthRoute component={Prices} />} />
    <Route path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/> }  setLoading={setLoading}></Route>
    <Route path='/signup' element={<SignUp setLoading={setLoading}/>}></Route>
    </Routes></Router>
    
    </>
    
    )
  }
    </>
  );
}

export default App;
