import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [showMoreMsg, setShowMoreMsg] = useState<boolean>(false)

  const toggleShow = () => {
    setShowMoreMsg(!showMoreMsg)
  }

  return (
    <div className={classes.post}>
      <p>id: {post.id}</p>
      <p>postedBy: {post.userId}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      {showMoreMsg && <p>More post info...</p>}
      <button className="rounded-none border-solid border-2 to-black" onClick={toggleShow}>
        {showMoreMsg ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )
}

export default Post
