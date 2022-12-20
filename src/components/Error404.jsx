import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center bg-gray-50">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal">Lo sentimos, no pudimos encontrar esta página </p>
            <p className="mb-8">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.</p>

            <Link to={'/'} className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red bg-red-400 active:bg-red-500 hover:bg-red-600">Volver a al página de inicio</Link>
          </div>
          <div className="max-w-lg">
            <img src="/assets/img/cat404.jpg" alt="" />
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Error404