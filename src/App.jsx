import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import StarshipsList from '../pages/starships/StarshipsList'
import ShipDetails from '../ShipDetails/ShipDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path="/starships" element={<StarshipsList />} />
        <Route path='/starships/:shipId' element={<ShipDetails />} />
      </Routes>
    </>
  )
}

export default App
