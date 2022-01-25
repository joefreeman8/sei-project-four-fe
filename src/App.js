import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import RehomingForm from './components/common/RehomingForm'
import Donation from './components/common/Donation'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import DogIndex from './components/dogs/DogIndex'
import AboutUs from './components/aboutUs/AboutUs'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rehomingform" element={<RehomingForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dogs" element={<DogIndex />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
