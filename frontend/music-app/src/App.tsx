// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import RegisterUser from './components/RegisterUser'
import Login from './components/Login'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/user' element={<RegisterUser />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
