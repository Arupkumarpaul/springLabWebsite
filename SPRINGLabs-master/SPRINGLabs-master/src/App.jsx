import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PeopleCurrent from './pages/PeopleCurrent'
import PeopleAlumini from './pages/PeopleAlumini'
import Projects from './pages/Projects'
import Projects2 from './pages/Projects2'
import Footer from './components/Footer'
import Publications from './pages/Publications'
import Contact from './pages/Contact'
import ComputingResources from './pages/ComputingResources'
import Events from './pages/Events'
import NewsAndEvents from './pages/NewsAndEvents'
import NotFound from './pages/NotFound'
import ComingSoon from './pages/ComingSoon'
import ProjectDetail from './pages/ProjectDetail'
import Products from './pages/Products'

function App() {
  
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people/current" element={<PeopleCurrent />} />
        <Route path="/people/alumni" element={<PeopleAlumini />} />
        <Route path="/resources" element={<ComputingResources />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news_events" element={<NewsAndEvents />} />
        <Route path="/projects/:id" element={<ProjectDetail/>} />
        {/* <Route path="/affairs/news" element={<NewsUpdates />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
