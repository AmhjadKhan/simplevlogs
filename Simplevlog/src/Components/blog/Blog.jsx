import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Blog({blog}) {
   const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
  return (
    <div>
      <img src={cover} alt={`cover picture of title ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
           <img className="w-24 pt-4 m-4" src={author_img} alt="" />
           <div className="pt-4 m-4">
            <h1 className="text-2xl ">{author}</h1>
            <p>{posted_date}</p>
           </div>
        </div>
        <div className="pt-4 ml-12">
           <span>{reading_time} min read</span>
           
        </div>
      </div>
      <h2 className="text-5xl">{title}</h2>
    </div>
  )
}

export default Blog
