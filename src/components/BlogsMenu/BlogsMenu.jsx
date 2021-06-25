import Card from '../../UI/Card/Card'

import blogs from './data.js'

import './BlogsMenu.scss'

const BlogsMenu = ({ marginTop }) => {
  return (
      <div className='blogs-menu-container' style={{marginTop: marginTop}}>
        {blogs.map(blog => (
          <Card 
            key={blog.id}
            title={blog.title} 
            date={blog.date} 
            image={blog.image} 
            description={blog.description} 
          />
        ))}
      </div>
  )
}

export default BlogsMenu
