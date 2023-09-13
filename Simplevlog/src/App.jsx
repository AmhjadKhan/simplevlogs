import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header'
import BookMarks from './Components/Bookmarks/BookMarks'

const App = () => {
  const [bookmarks, setBookmarks] = useState([])
  const [readingtime, setRedingtime] = useState(0)

  const handleAddtoBookMark = blog =>{
      const Newbookmarks = [...bookmarks, blog]
         setBookmarks(Newbookmarks)
  }

  const HandlemarkAsRead = time =>{
    setRedingtime(readingtime + time)
  }
  return (
    <div>
      <Header />
      <div className='md:flex'>
      <Blogs handleAddtoBookMark={handleAddtoBookMark}
       HandlemarkAsRead={HandlemarkAsRead} />
      <BookMarks bookmarks={bookmarks} readingtime={readingtime} />
      </div>
    </div>
  )
}

export default App
