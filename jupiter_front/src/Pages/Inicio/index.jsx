import Layout from "../../Components/Layout";
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <Layout>
      <div className="flex justify-between gap-20">
        <div className="w-1/2 pr-28">
          <h1 className='text-white text-center text-5xl mt-28 mr-72 ml-32 whitespace-nowrap'>Bienvenidos a JUPITER</h1>
          <p className='text-white text-center text-3xl mt-12 ml-32 whitespace-nowrap '>Estás a punto de tener el trabajo de <br /> tus sueños</p>

          {/* Botones centrados debajo del texto */}
          <div className="flex justify-center mt-11 ">
            <Link to="/candidatos" className=" text-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 px-4 w-auto h-auto font-semibold mr-6 ml-32">
              Acceso a Candidatos
            </Link>
            <Link to="/empresas" className=" text-center bg-sky-400 hover:bg-sky-300 text-white rounded-lg py-2 px-4 w-auto h-auto text-base font-semibold ml-9">
              Acceso a Empresas
            </Link>
            <Link to="/vacantes" className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 px-4 w-auto h-auto text-base font-semibold ml-9">
              Gestión Vacantes
            </Link>
          </div>
        </div>
        <div className="w-1/2 ">
  <img src="src/foto.png" alt="Imagen" className="h-6/6 w-full {width: 80%;} mt-12 me-0"
  />
</div>

      </div>
    </Layout>
  )
}

export default Inicio;