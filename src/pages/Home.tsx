import classes from './Home.module.css'
import Post from '../components/Post'
import usePosts from '../hooks/usePosts'

const Home = () => {
  const { posts } = usePosts()

  return (
    <div className={classes.feedContainer}>
      <h2>Feed</h2>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
    </div>
  )
}

export default Home
