import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import About from './Components/About/About';
import ForgotPassword from './Components/auth/Forgot password/ForgotPassword';
import Login from './Components/auth/Login/Login';
import Register from './Components/auth/Register/Register';
import ResetPassword from './Components/auth/ResetPassword/ResetPassword';
import Contact from './Components/Contact/Contact';
import CoursePage from './Components/CoursePage/CoursePage';
import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import Footer from './Components/layout/Footer/Footer';
import Header from './Components/layout/Header/Header';
import { NotFound } from './Components/NotFound/NotFound';
import { PaymentFail } from './Components/Payment/PaymentFail';
import PaymentSuccess from './Components/Payment/PaymentSuccess';
import Profile from './Components/Profile/Profile';
import Request from './Components/Request/Request';
import Subscribe from './Components/Subscribe/Subscribe';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/course/:id' element={<CoursePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/resetPassword/:token' element={<ResetPassword/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/request' element={<Request/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
        <Route path='/paymentfail' element={<PaymentFail/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
