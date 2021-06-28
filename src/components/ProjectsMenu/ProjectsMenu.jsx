import React from 'react'
import Project from './Project'

import './ProjectsMenu.scss'

import url1 from '../../assets/images/portfolio/1.jpg'
import url2 from '../../assets/images/portfolio/2.jpg'
import url3 from '../../assets/images/portfolio/3.jpg'
import url4 from '../../assets/images/portfolio/4.jpg'
import url5 from '../../assets/images/portfolio/5.jpg'
import url6 from '../../assets/images/portfolio/6.jpg'
import url7 from '../../assets/images/portfolio/7.jpg'
import url8 from '../../assets/images/portfolio/8.jpg'
import url9 from '../../assets/images/portfolio/9.jpg'

const projects = [
  {id: 2, image: url1, title: 'Vinyl Record', category: 'Design'},
  {id: 3, image: url2, title: 'Minimal Mobile App', category: 'Design'},
  {id: 4, image: url3, title: 'White T-Shirt', category: 'Print'},
  {id: 5, image: url4, title: 'Minimal Bag', category: 'Brandign'},
  {id: 6, image: url5, title: 'Business Card', category: 'Branding'},
  {id: 7, image: url6, title: 'Paper Bag', category: 'Photography'},
  {id: 8, image: url7, title: 'Clean and Groovy', category: 'Design'},
  {id: 9, image: url8, title: 'White T-Shirt', category: 'Print'},
  {id: 10, image: url9, title: 'Minimal Bag', category: 'Branding'},
]

const ProjectsMenu = ({ marginTop }) => {
  return (
    <div className='projects-menu' style={{marginTop: marginTop}}>
      <div className='project-menu__item'>
        <h1>Best Projects</h1>
        <p>Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. 
          Etiam,pellentesque faucibus. 
          Vestibulum gravida volutpat ipsum non ultrices.</p>
      </div>
      <div className='cards-container'>
        {projects.map(project => (
          <Project 
            key={project.id} 
            url={project.image} 
            title={project.title} 
            category={project.category}
            />
        ))}
      </div>
    </div>
  )
}

export default ProjectsMenu
