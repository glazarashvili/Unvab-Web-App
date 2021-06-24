import React from 'react'

import Blog from './pages/Blog'
import About from './pages/About'
import MainPage from './pages/MainPage'
import Portfolio from './pages/Portfolio'
import ContactPage from './pages/ContactPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
        <Header />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={MainPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/portfolio' component={Portfolio} />
      <Footer />
    </Router>
  )
}

export default App
