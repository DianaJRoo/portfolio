import React from "react";
import "../../styles/certificado.css";
import certificado from "../../img/certificado.png";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import Card from './card';


 const Certificado = () => {

    return <>
       <div className="flex flex-col justify-center aling-center ">

       <Card
                images={[
                    certificado

                ]}

                title="Certificado"
                description2= <FaLinkedin className="hover:animate-pulse text-3xl"/> 
                description3= <LuGithub className="hover:animate-pulse text-3xl"/>
                descriptionLink2= "https://www.linkedin.com/school/4geeks-academy-latino/"
                descriptionLink3="https://github.com/4GeeksAcademy"
                buttonLink="https://certificate.4geeks.com/3de89a75e3fd415be81a2de554ae1bd98cdf2821"
            />

       </div>
    </>


}

export default Certificado;