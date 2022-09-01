import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import Listado from './components/ListadoTareas'

function App() {

  const [tareas,setTareas] = useState([])
  const [tarea,setTarea] = useState("")

  function eliminarTarea(id){
    const tareasActuales = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActuales)
  }

  return (
    <div className='container w-9/12'>
      <Encabezado/>
      <Formulario
        tareas = {tareas}
        setTareas = {setTareas}
        tarea = {tarea}
        setTarea = {setTarea}
      />
      <Listado
        tareas = {tareas}
        tarea = {tarea}
        eliminarTarea = {eliminarTarea}
      />
    </div>
  )
}

export default App
