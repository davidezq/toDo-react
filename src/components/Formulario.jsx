import React from 'react'

function Formulario() {
  
  const handleSubmit = () => {
    return console.log("Tarea agregada")
  }

  return (
    <div className='mt-3'>
      <h2 className='capitalize text-center font-bold text-xl mb-3 text-white'>Agregar tarea</h2>
      <form className='text-center'onSubmit={handleSubmit}>
        <input className='p-3 rounded w-2/4'  type="text" />
        <button className='p-3 uppercase font-bold bg-green-500 rounded text-white ml-2' type='submit'>Agregar</button>
      </form>
    </div>
  )
}

export default Formulario