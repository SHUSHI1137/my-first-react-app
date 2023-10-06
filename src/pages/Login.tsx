import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <label>UserName:</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-lg" />

      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} className="border-2 rounded-lg" />

      <input type="submit" value="Login"></input>
    </form>
  )
}

export default Login
