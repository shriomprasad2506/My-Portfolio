import {HashRouter,Route, Routes} from "react-router-dom"
import './App.css'

import Navbar from './components/Navbar'
import Themes from "./components/Themes"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import ScrollToTop from "./components/ScrollToTop"

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

function App() {

  useEffect(()=>{
    Aos.init();
  })
  return (
    <>
      <HashRouter>
      <ScrollToTop/>
        <Navbar/>
        <Themes/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path="portfolio" element={<Portfolio/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
