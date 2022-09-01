import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import Listado from './components/ListadoTareas'

function App() {

  return (
    <div className='container w-9/12'>
      <Encabezado/>
      <Formulario></Formulario>
      <Listado/>
    </div>
  )
}

export default App
