// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import RegisterUser from './components/RegisterUser'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import Entry from './components/Entry'
import Album from './components/Album'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Entry />} />
      <Route path='/user' element={<RegisterUser />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
    </Routes>
  )
}

export default App
