import  { useEffect, useState } from 'react'
import Blog from '../blog/Blog'

function Blogs({handleAddtoBookMark}) {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
  return (
    <div className='md:w-2/3'>
       <h1 className='text-4xl p-10'>Blogs:{blogs.length}</h1>
       {
        blogs.map((blog, i) => <Blog
            key={blog.id + i } 
            blog={blog}
            handleAddtoBookMark={handleAddtoBookMark}
            ></Blog>)
       }
    </div>
  )
}

export default Blogs
