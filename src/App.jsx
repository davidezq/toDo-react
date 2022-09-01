import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {

  return (
    <div className='container'>
      <Encabezado/>
      <Formulario></Formulario>
      <Listado/>
    </div>
  )
}

export default App
