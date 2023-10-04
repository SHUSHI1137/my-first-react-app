import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { CreatePostDTO, PostDTO } from './types/dto'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewbody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newPostBody: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.post<PostDTO>('https://jsonplaceholder.typicode.com/posts', newPostBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      console.log(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsSubmitting(false)
    }

    // axios
    //   .post('https://jsonplaceholder.typicode.com/posts', {
    //     userId: null,
    //     title: newTitle,
    //     body: newBody,
    //   })
    //   .then(function (response) {
    //     console.log(response.data)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // console.log(handleSubmit)

    // const axios = require(axios)

    // * Clear form after set posts
    setNewTitle('')
    setNewbody('')
  }

  if (isLoading) return <h1>Loading.....</h1>

  return (
    <div className="App">
      <Navbar />
      <Greeting name="Steve Roger" isLoggedIn={true} />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border-solid border-2 border-sky-500"
          required
        />
        <label>Body</label>
        <input
          type="text"
          value={newBody}
          onChange={(e) => setNewbody(e.target.value)}
          required
          className="border-solid border-2 border-sky-500"
        />
        <button type="submit" disabled={isSubmitting} className="border-solid border-2 rounded-lg border-green-500 ">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default App
