import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'
import Media from './Pages/Media'
import './src/index.css'

function App(){
  return (
    <BrowserRouter>
      <Layout currentPageName={window.location.pathname.replace('/','') || 'Home'}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/media" element={<Media/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
