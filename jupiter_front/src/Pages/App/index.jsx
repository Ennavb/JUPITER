import { useRoutes, BrowserRouter } from 'react-router-dom'
import Inicio from '../Inicio'
import Candidatos from '../Candidatos'
import Empresas from '../Empresas'
import Registro from '../Registro/index'
import Navbar from '../../Components/Navbar'
import NotFound from '../NotFound'
import Vacantes from '../Vacantes'
import GesCandidatos from '../GesCandidatos'
import Informe from '../Informe'

import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Inicio /> },
    { path: '/candidatos', element: <Candidatos /> },
    { path: '/empresas', element: <Empresas /> },
    { path: '/registro', element: <Registro /> },
    { path: '/vacantes', element: <Vacantes/> }, 
    { path: '/gescandidatos', element: <GesCandidatos/> }, 
    { path: '/informe', element: <Informe/> },
    { path: '/', element: <NotFound/> } 

  ])
  
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
      
    </BrowserRouter>
  )
}

export default App
