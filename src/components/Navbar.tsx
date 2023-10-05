import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#3b82f6] box-border w-full h-auto px-8 py-2 item-center text-neutral-50">
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create
        </NavLink>
        <button className="bg-sky-500/75 h-7 w-16 rounded-lg">Login</button>
      </div>
    </nav>
  )
}

export default Navbar
