import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-pink-900 h-25">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
    <div className="relative flex h-20 items-center justify-between">
     
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            <Link to="/about" className="text-pink-300 bg-pink-900 text-white rounded-md px-5 py-3 text-sm font-medium" aria-current="page">Sobre Mí</Link>
            <Link to="/certificado" className="text-pink-300 hover:bg-pink-700 hover:text-white rounded-md px-5 py-3 text-sm font-medium">Certificación</Link>
            <Link to="/proyectos" className="text-pink-300 hover:bg-pink-700 hover:text-white rounded-md px-5 py-3 text-sm font-medium">Proyectos</Link>
            <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white rounded-md px-5 py-3 text-sm font-medium">Contáctame</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

     
        <div className="relative ml-3">
          <div >
            <Link to="/home"button type="button" className="text-pink-300 bg-pink-700 text-white rounded-lg px-5 py-3 text-sm font-medium">
              <span className="absolute -inset-1.5"></span>
              
             <p>Diana JRoo</p>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">

      <Link to="/about" className="bg-pink-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Sobre mi</Link>
      <Link to="/certificado" className="text-pink-300 hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Certificado</Link>
      <Link to="/proyectos" className="text-pink-300 hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Proyectos</Link>
      <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contáctame</a>
    </div>
  </div>
</nav>
	);
};

export default Navbar;