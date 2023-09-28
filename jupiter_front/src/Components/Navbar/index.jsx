import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-4xl text-sky-600'>
          <NavLink to='/'>
            <img src="src/logo.png" alt="" />
          </NavLink>
        </li>
     
      </ul> 
      <ul className='flex items-center gap-3 ' >
      <li className='text-center bg-sky-400 hover:bg-sky-300 text-white rounded-lg py-2 px-4 w-auto h-auto text-base font-semibold ml-9"'>
          <NavLink
            to='/registro'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Regístrate
          </NavLink>
        </li>
      </ul> 
   </nav>
  )
}

export default Navbar