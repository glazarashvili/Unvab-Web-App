import React from 'react'

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'

// import Header from './components/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import MainLayout from './components/MainLayout/MainLayout'


const App = () => {
  return (
    <Router>
      <Route path='/' exact component={MainPage} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio' component={Portfolio} />



    </Router>
  )
}

export default App
