// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
)
