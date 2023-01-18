import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ForgotPassword from './Components/auth/Forgot password/ForgotPassword';
import Login from './Components/auth/Login/Login';
import Register from './Components/auth/Register/Register';
import ResetPassword from './Components/auth/ResetPassword/ResetPassword';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import Footer from './Components/layout/Footer/Footer';
import Header from './Components/layout/Header/Header';
import Request from './Components/Request/Request';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/resetPassword/:token' element={<ResetPassword/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/request' element={<Request/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
