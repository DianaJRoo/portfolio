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
          <img className="h-12 w-12 rounded-full" src="https://i2.wp.com/media1.thehungryjpeg.com/thumbs2/ori_3625782_ecwl38qqxfodi45iiiuz05paa152ifjkklmricgj_dj-monogram-logo-design.jpg" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            <Link to="/about" className="text-pink-300 bg-pink-900 text-white rounded-md px-5 py-3 text-sm font-medium" aria-current="page">Sobre Mí</Link>
            <Link to="/certificado" className="text-pink-300 hover:bg-pink-700 hover:text-white rounded-md px-5 py-3 text-sm font-medium">Certificación</Link>
            <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white rounded-md px-5 py-3 text-sm font-medium">Proyectos</a>
            <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white rounded-md px-5 py-3 text-sm font-medium">Contáctame</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

     
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-pink-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

          
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">

      <a href="#" className="bg-pink-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-pink-300 hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
	);
};

export default Navbar;