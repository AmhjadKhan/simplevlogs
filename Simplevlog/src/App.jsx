import React from 'react'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header'
import BookMarks from './Components/Bookmarks/BookMarks'

const App = () => {
  return (
    <div>
      <Header />
      <div className='md:flex'>
      <Blogs />
      <BookMarks />
      </div>
    </div>
  )
}

export default App
