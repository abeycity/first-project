import React from 'react';
import Login from './login/login';
import Registration from './login/registration';
 import LandingPage from './homepage/landingpage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ForgotPassword from './login/forgotpassword';

function App() {
  return (

    <div>
     <Router>
  
       <Routes>
        <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
       </Routes>
   
       </Router>
    </div>
  );
}

export default App;
