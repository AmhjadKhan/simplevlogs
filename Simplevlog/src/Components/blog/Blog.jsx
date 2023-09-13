import { FaBookmark } from "react-icons/fa";

function Blog({blog, handleAddtoBookMark }) {
   const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt={`cover picture of title ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
           <img className="w-24 pt-4 m-4" src={author_img} alt="" />
           <div className="pt-4 m-4">
            <h1 className="text-2xl rounded-10">{author}</h1>
            <p>{posted_date}</p>
           </div>
        </div>
        <div className="pt-4 ml-12 flex">
           <span>{reading_time}min read</span>
           <button onClick={() => handleAddtoBookMark(blog)}
           ><FaBookmark />
           </button>
        </div>
      </div>
      <h2 className="text-5xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) =><span key={idx}><a href="">#{hash}</a> </span>)
        }
      </p>
    </div>
  )
}

export default Blog
