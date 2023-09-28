import { NavLink } from "react-router-dom"


const Vacantes = () => {
  const activeStyle = ''
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-4xl text-sky-600'>
          <NavLink to='/'>
            <h2></h2>
          </NavLink>
        </li>
      </ul>

     {/* --aqui renderiza a la derecha--  */}
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg text-sky-600'>
        <NavLink
            to='/vacantes'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Vacantes
        </NavLink>
        </li>
        <li className='font-semibold text-lg text-sky-600'>
        <NavLink
            to='/gescandidatos'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Candidatos
        </NavLink>
        </li>
        <li className='font-semibold text-lg text-sky-600'>
        <NavLink
            to='/informe'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Informes
        </NavLink>
        </li>
        <li>
        <NavLink to='/mi-perfil'className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 px-4 w-auto h-auto font-semibold mr-2">
            Mi perfil
        </NavLink>
      </li>
    </ul>
  </nav>
)
}
export default Vacantes