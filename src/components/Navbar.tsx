// import navClass from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#3b82f6] box-border w-full h-auto px-8 py-2 item-center text-neutral-50">
      <p>Navbar</p>
      <button className="bg-sky-500/75 h-7 w-16 rounded-lg">Login</button>
    </nav>
  )
}

export default Navbar
