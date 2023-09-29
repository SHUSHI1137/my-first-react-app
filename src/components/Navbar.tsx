import navClass from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={navClass.nav}>
      <p>Navbar</p>
      <button>Login</button>
    </nav>
  )
}

export default Navbar
