import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import RehomingForm from './components/common/RehomingForm'
import Donation from './components/common/Donation'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import DogIndex from './components/dogs/DogIndex'
import DogShow from './components/dogs/DogShow'
import AboutUs from './components/common/AboutUs/AboutUs'
import WhoWeAre from './components/common/AboutUs/WhoWeAre'
import Fundraiser from './components/common/AboutUs/Fundraiser'
import Footer from './components/common/Footer'
import Newsletter from './components/common/Newsletter'


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
        <Route path="/donation" element={<Donation />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/whoweare" element={<WhoWeAre />} />
        <Route path="/aboutus/fundraiser" element={<Fundraiser />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
