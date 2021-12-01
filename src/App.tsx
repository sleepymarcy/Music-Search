import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import TrackDetails from './components/TrackDetails'
import MainSearch from './components/MainSearch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainSearch />} />
        <Route path='/details/:id' element={<TrackDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App