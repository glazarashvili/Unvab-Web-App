import React from 'react'

import About from './About'
import Slider from '../UI/Slider/Slider'
import Contact from '../components/Contact/Contact'
import BlogsMenu from '../components/BlogsMenu/BlogsMenu'
import MainLayout from '../components/MainLayout/MainLayout'
import ProjectsMenu from '../components/ProjectsMenu/ProjectsMenu'


const MainPage = () => (
  <React.Fragment>
    <MainLayout />
    <About />
    <ProjectsMenu />
    <Slider />
    <BlogsMenu />
    <Contact />
  </React.Fragment>
)

export default MainPage
