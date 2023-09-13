import React from 'react'

function Bookmark({bookmark}) {
    const {title} = bookmark;
  return (
    <div>
      <h2 className='text-3xl text-center mt-8 bg-white rounded-2xl'>{title}</h2>
    </div>
  )
}

export default Bookmark
