import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import RehomingForm from './components/common/RehomingForm'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rehomingform" element={<RehomingForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
