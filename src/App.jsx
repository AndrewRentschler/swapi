import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import StarshipsList from '../pages/starships/StarshipsList'

function App() {


  return (
    <>
      <Routes>
        <Route path="/starships" element={<StarshipsList />} />
      </Routes>
    </>
  )
}

export default App
