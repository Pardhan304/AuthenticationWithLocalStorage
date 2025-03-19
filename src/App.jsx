import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Singnup from './LoginSignup/SignUp'
import Login from './LoginSignup/Login'
import Home from './LoginSignup/Home'

const App = () => {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Singnup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App