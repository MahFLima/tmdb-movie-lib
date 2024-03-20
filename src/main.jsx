import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/index.jsx'
import PageFilm from './pages/PageFilm/index.jsx'
import Search from './pages/Search/index.jsx'
import './global.css'
import PageTv from './pages/PageTV/index.jsx'
import PageTvShow from './pages/PageTvShow/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home description='top_rated'/>}/>
          <Route path='/movie/:id' element={<PageFilm/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='popular' element={<Home description='popular'/>}/>
          <Route path='tv-show' element={<PageTv description='popular'/>}/>
          <Route path='/tv-show/:id' element={<PageTvShow/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
