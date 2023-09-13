import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header'
import BookMarks from './Components/Bookmarks/BookMarks'

const App = () => {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddtoBookMark = blog =>{
      const Newbookmarks = [...bookmarks, blog]
         setBookmarks(Newbookmarks)
  }

  return (
    <div>
      <Header />
      <div className='md:flex'>
      <Blogs handleAddtoBookMark={handleAddtoBookMark} />
      <BookMarks bookmarks={bookmarks}/>
      </div>
    </div>
  )
}

export default App
