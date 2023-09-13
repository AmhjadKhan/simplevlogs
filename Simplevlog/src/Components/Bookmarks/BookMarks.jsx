import React from 'react'
import Bookmark from '../bookmark/Bookmark'

function BookMarks({bookmarks,readingtime}) {
  // console.log(bookmarks)
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-6'>
      <div>
        <h3 className="text-4xl text-center">Reading Time:{readingtime}</h3>
      </div>
      <h2 className='text-center text-3xl mt-10'>BookMarks Blog :{bookmarks?.length}</h2>
      {
       bookmarks.map(bookmark => <Bookmark bookmark={bookmark}/>) 
      }
    </div>
  )
}

export default BookMarks
