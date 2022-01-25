import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import RehomingForm from './components/common/RehomingForm'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import DogIndex from './components/dogs/DogIndex'
import AboutUs from './components/aboutUs/AboutUs'
import DogShow from './components/dogs/DogShow'

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
        <Route path="/dogs/:dogId" element={<DogShow />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
