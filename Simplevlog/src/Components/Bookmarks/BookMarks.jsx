import React from 'react'

function BookMarks({bookmarks}) {
  console.log(bookmarks)
  return (
    <div className='md:w-1/3'>
      <h2>BookMarks :{bookmarks?.length}</h2>
    </div>
  )
}

export default BookMarks
