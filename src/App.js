import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BlogPage from './pages/BlogPage'


const App = () => {

  return (
    <Router>
      <Header />
      <Route path='/' exact component={MainPage} />
      <Route path='/blog' component={BlogPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/portfolio' component={PortfolioPage} />
      <Footer />
    </Router>
  )
}

export default App
