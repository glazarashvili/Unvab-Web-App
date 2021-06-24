import React from 'react'

import Blog from './pages/Blog'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Wrapper from './UI/Wrapper/Wrapper'
import ContactPage from './pages/ContactPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'


const App = () => {
  return (
    <Router>
      <Header />
      {/* <Wrapper> */}
        <Route path='/' exact component={MainPage} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/blog' component={Blog} />
      {/* </Wrapper> */}
      <Footer />
    </Router>
  )
}

export default App
