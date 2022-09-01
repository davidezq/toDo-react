
function Tarea({tarea, eliminarTarea}) {
  
  const {id,nombre,cantidad} = tarea;

  function borrarTarea(){
    return eliminarTarea(id)
  }

  return (
    <div className='flex justify-center items-center gap-2 mb-3'>
        <p className='text-white font-bold text-xl'>{cantidad}</p>
        <p className='text-white font-bold text-xl'>{nombre}</p>
        <button className='px-3 py-1 bg-red-500 rounded-lg' onClick={borrarTarea}>X</button>
    </div>
  )
}

export default Tarea