import classes from './Home.module.css'
import Post from '../components/Post'
import usePosts from '../hooks/usePosts'
import { useAuth } from '../providers/AuthProvider'

const Home = () => {
  const { posts, isLoading } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log('from home', isLoggedIn)

  if (isLoading) return <h1>Loading...</h1>

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
