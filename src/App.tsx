import { FormEvent, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import usePosts from './hooks/usePosts'

function App() {
  const { posts, isLoading, isSubmitting, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('') //* can't move because newTitle and body wait for input on ui
  const [newBody, setNewbody] = useState<string>('') //* can't move because newTitle and body wait for input on ui

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      // * Clear form after set posts
      setNewTitle('')
      setNewbody('')
    } catch (err) {
      console.log(err)
    }

    // * another way for use axios post method
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
