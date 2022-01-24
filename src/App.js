import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import DogIndex from './components/dogs/DogIndex'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/dogs' element={<DogIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
