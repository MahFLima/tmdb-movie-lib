import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/index.jsx'
import Teste from './pages/Teste.jsx'
import Teste1 from './pages/Teste1.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/teste' element={<Teste/>}/>
          <Route path='/teste1' element={<Teste1/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
