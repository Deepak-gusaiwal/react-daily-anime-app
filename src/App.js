import React from 'react';


import './index.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Video from './components/Video.jsx';
import Upload from './components/Upload.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/video' element={<Video/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   <Footer/>
   
   </>
  );
}

export default App;
