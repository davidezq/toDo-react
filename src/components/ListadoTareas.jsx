import Tarea from './Tarea'

function Listado({tarea,tareas,eliminarTarea}) {

  function idUnico(){
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2);
    return fecha+random;
  }

  return (
    <div className='mt-5'>
      {
        tareas.map(tarea=> {
          return (
              <Tarea
                key = {tarea.id}
                tarea = {tarea}
                eliminarTarea = {eliminarTarea}
              />
          )
        })
      }
      
    </div>
  )
}

export default Listado