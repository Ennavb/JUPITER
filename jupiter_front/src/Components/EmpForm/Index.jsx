import { useForm } from 'react-hook-form';

const EmpForm = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      // Coloca aquí la lógica para manejar el envío del formulario
      console.log(data);
    };
  
    return (
      <>
        <form
          className='bg-slate-800 border rounded-2xl w-96 py-8 px-8 mt-20 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className='text-2xl text-white font-bold pb-4'>Registra tu hoja de Vida</h2>
          <div className='mb-4 flex'>
            <div className='w-1/2 pr-2'>
              <label className='text-white' htmlFor='nombre'>
                Nombre:
              </label>
              <input
                className='rounded-lg bg-slate-400 text-lg w-full p-2'
                placeholder='Nombre'
                type='text'
                {...register('nombre')}
              />
            </div>
            <div className='w-1/2 pl-2'>
              <label className='text-white' htmlFor='apellido'>
                Apellido:
              </label>
              <input
                className='rounded-lg bg-slate-400 text-lg w-full p-2'
                placeholder='Apellido'
                type='text'
                {...register('apellido')}
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='text-white' htmlFor='cedula'>
              Cédula:
            </label>
            <input
              className='rounded-lg bg-slate-400 text-lg w-full p-2'
              type='text'
              {...register('cedula')}
            />
          </div>
          <div className='mb-4 flex'>
            <div className='w-1/3 pr-2'>
              <label className='text-white' htmlFor='fechaNacimiento'>
                Fecha de Nacimiento:
              </label>
              <input
                className='rounded-lg bg-slate-400 text-lg w-full p-2'
                type='date'
                {...register('fechaNacimiento')}
              />
            </div>
            <div className='w-2/3 pl-2'>
              <label className='text-white' htmlFor='email'>
                E-mail:
              </label>
              <input
                className='rounded-lg bg-slate-400 text-lg w-full p-2'
                type='email'
                {...register('email')}
              />
            </div>
          </div>
          <div className='mb-4 flex'>
            <div className='w-1/2 pr-2'>
              <label className='text-white' htmlFor='password'>
                Contraseña:
              </label>
              <input
                className='rounded-lg bg-slate-400 text-lg w-full p-2'
                type='password'
                {...register('password')}
              />
            </div>
            <div className='w-1/2 pl-2'>
              <label className='text-white' htmlFor='repeatPassword'>
                Repita Contraseña:
              </label>
              <input
                className='rounded-lg bg-slate-400 text-lg w-full p-2'
                type='password'
                {...register('repeatPassword')}
              />
            </div>
          </div>
          <div>
            <button
              className='bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 px-4 text-lg font-semibold'
              type='submit'
            >
              Enviar
            </button>
          </div>
        </form>
      </>
    );
  };
  
  export default EmpForm;