import {useState} from "react"

function Formulario({tarea,tareas,setTareas,setTarea}) {
  
  const [tareaLocal,setTareaLocal] = useState('');

  function idUnico(){
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2);
    return fecha+random;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Pasando la tarea agregada al app.jsx
    if(tareaLocal.length > 0){
      setTarea(tareaLocal)
      setTareas([...tareas,{id:idUnico(),nombre:tareaLocal}])
    }
    setTareaLocal('');
  }
  const handleTareaLocal = (e) => (
    setTareaLocal(e.target.value)
  )
  return (
    <div className='mt-3'>
      <h2 className='capitalize text-center font-bold text-xl mb-3 text-white'>Agregar tarea</h2>
      <form className='text-center'onSubmit={handleSubmit}>
        <input className='p-3 rounded w-2/4'  type="text" value={tareaLocal} onChange={handleTareaLocal}/>
        <button className='p-3 uppercase font-bold bg-green-500 rounded text-white ml-2' type='submit'>Agregar</button>
      </form>
    </div>
  )
}

export default Formulario