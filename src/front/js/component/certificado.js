import React from "react";
import "../../styles/certificado.css";
import certificado from "../../img/certificado.png";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";


 const Certificado = () => {

    return <>
     <div  className="flex sm:flex-row mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20  min-h-screen mt-0 mb-0">
            <div className="image transition-all justify-center items-center  ">
				<img className= "hover:animate-pulse rounded-lg shadow-2xl shadow-pink-900 p-2 bg-stone-300 ml-40" src={certificado} />
            </div>
                <div className="flex flex-col justify-start items-center mx-auto md:px-8 lg:px-16 xl:px-20 mt-20">
                
                <a href="https://certificate.4geeks.com/3de89a75e3fd415be81a2de554ae1bd98cdf2821" target="_blank" rel="noopener noreferrer"> 
                 < button class="hover:animate-bounce animate-infinite animate-duration-[4000ms] ease-in-out rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Ir a certificado</button>
                </a>
               
               

            
           
           <div className="justify-between flex flex-row items-center">
            <div className="mt-5 flex flex-row items-center justify-center gap-5">
            <a href="https://www.linkedin.com/school/4geeks-academy-latino/" target="_blank" rel="noopener noreferrer">   
           <h2>  <FaLinkedin className="hover:animate-pulse text-3xl"/> </h2>
           </a>
           <a href="https://github.com/4GeeksAcademy" target="_blank" rel="noopener noreferrer">  
           <h2> <LuGithub className="hover:animate-pulse text-3xl"/>    </h2>
           </a>
          

           </div>
           </div>
           </div>
        </div>
    </>


}

export default Certificado;