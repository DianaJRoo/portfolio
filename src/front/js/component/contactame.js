import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const Contactame = () => {
  return <>
    <div id='body' className='flex flex-col justify-center mt-0 mb-0 items-center w-full'>

      <form className="flex flex-col items-center p-4 w-full" >

        <div id="form1" className="border w-full border-gray-900/10 pb-15 p-4 mx-auto max-w-2xl rounded-lg shadow-2 bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-100">
          <h2 className="text-base font-semibold leading-7 text-gray-900 flex justify-center">
            Contáctame
          </h2>


          <div className="sm:col-span-3 mt-2">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>
            <div className="sm:col-span-3">
              <input
                id="first_name"
                name="first_name"
                type="first_name"
                autoComplete="first_name"
                required

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>



          <div className="sm:col-span-3 mt-2">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Dirección de correo electrónico
            </label>
            <div className="sm:col-span-3">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between ">
              <label htmlFor="mensaje" className="block text-sm font-medium leading-6 text-gray-900">
                Mensaje
              </label>
            </div>
            <div className="mt-2">
              <input
                id="mensaje"
                name="mensaje"
                type="mensaje"
                autoComplete="mensaje"

                required

                className="block w-full rounded-md border-0 py-20 px-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="footer" style={{ display: 'flex', justifyContent: 'center' }}>

              <button className="flex justify-center mt-7 mb-1 bg-pink-900 hover:bg-pink-700 text-pink-200 hover:text-pink-50 font-overpass text-base font-semibold py-3 px-10 rounded "
                type="submit"
                title="Ingresar"
                name="Ingresar">


                Enviar

              </button>

            </div>
          </div >
        </div >
      </form >
    </div >

    <div className='icon border-y-4 py-2 gap-6 shadow w-full p-0 flex flex- row justify-center m-0 '>

      <div className='animate-pulse p-0 m-0 animate-infinite mb-3  text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center ' >
        <a href="https://www.linkedin.com/in/diana-jimenez-roo/" target="_blank" rel="noopener noreferrer">
          <h2>  <FaLinkedin className="hover:animate-pulse text-3xl mr-4" /> </h2>
        </a>
        <a href="https://github.com/DianaJRoo" target="_blank" rel="noopener noreferrer">
          <h2> <LuGithub className="hover:animate-pulse text-3xl ml-4" />    </h2>
        </a>

      </div>



    </div >





  </>



}


export default Contactame;