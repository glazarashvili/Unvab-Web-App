import React from 'react'

import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'

// import Header from './components/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
// import MainLayout from './components/MainLayout/MainLayout'

import Header from './components/Header/Header'


const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={MainPage} />
      <Route path='/about' component={Blog} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/blog' component={Blog} />
    </Router>
  )
}

export default App
