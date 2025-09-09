import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import FirstResponders from './components/FirstResponders'
import GateDealers from './components/GateDealers'
import EndUsers from './components/EndUsers'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first-responders" element={<FirstResponders />} />
            <Route path="/gate-dealers" element={<GateDealers />} />
            <Route path="/end-users" element={<EndUsers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

