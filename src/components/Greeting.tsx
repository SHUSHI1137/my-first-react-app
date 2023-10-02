import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  greetingMsg: string
  isLoggedIn: boolean
}

const Greeting = ({ name, greetingMsg, isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>{greetingMsg}</h3>
      <p>{isLoggedIn ? name : 'Unknown'}</p> //* conditional Rendering on content inside element
    </div>
  )
}

export default Greeting
