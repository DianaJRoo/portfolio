import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { VscGithub } from "react-icons/vsc";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiMysql, SiPostman } from "react-icons/si";


 const About = () => {
    const { store, actions } = useContext(Context);

    return (
        <>

            <div id='hero-body' className="flex flex-col justify-center items-center mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-300 min-h-screen ">
                <h1 className="animate-pulse animate-infinite mb-3  text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                &lt;Full Stack Developer/&gt;
                </h1>

                <p>
                    Hola, soy Diana JRoo, una apasionada desarrolladora web con un fuerte enfoque en crear soluciones digitales eficientes y atractivas. Soy una persona proactiva y dinámica, siempre buscando mejorar y aprender nuevas habilidades.<br />

                    Además, tengo experiencia en servicio al cliente, lo que me ha permitido desarrollar excelentes habilidades comunicativas y una capacidad para entender y satisfacer las necesidades de los usuarios. Mi enfoque colaborativo y mi habilidad para trabajar bien en equipo me permiten llevar a cabo proyectos con éxito, siempre buscando la excelencia en cada detalle.<br />
  
                    Durante mis estudios, he adquirido experiencia trabajando con una variedad de tecnologías clave en el desarrollo web y de software. Estas incluyen <span>HTML, CSS, Bootstrap</span> y <span>Tailwind CSS</span>, que son fundamentales para la creación de interfaces de usuario atractivas y responsivas. Además, he desarrollado habilidades en programación utilizando <span>Python, JavaScript</span> y <span>React</span>, lo que me ha permitido construir aplicaciones dinámicas e interactivas. También he trabajado con bases de datos utilizando <span>SQLAlchemy</span> en <span>Python</span>, así como con <span>Flask </span>para la creación de servidores web. Además, he explorado las capacidades de <span>Firebase</span> para el desarrollo de aplicaciones web en tiempo real y la gestión de bases de datos en la nube. Estas experiencias han ampliado mi conjunto de habilidades y me han preparado para enfrentar desafíos en el campo del desarrollo de software con confianza y creatividad.

                </p>

                <div id='hero' className='d-flex flex-column'  >
                    <h1 className='text-5xl text-gray-500 font-bold text-center'>

                    </h1>

                </div>
            </div>

            <div className='icon border-y-4 py-4 gap-6 shadow w-full p-0 flex flex- row justify-center m-0 '>

                <div className='animate-pulse p-0 m-0 animate-infinite mb-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex ' >
                    <VscGithub className="flex-grow"/> < TiHtml5 className="flex-grow"/> <RiTailwindCssFill className="flex-grow"/> <FaBootstrap className="flex-grow"/> <IoLogoJavascript className="flex-grow" /> <FaReact className="flex-grow"/> <FaPython className="flex-grow"/> <SiFlask className="flex-grow"/> <SiMysql className="flex-grow"/> <IoLogoFirebase className="flex-grow"/> <SiPostman className="flex-grow"/>
                </div>



            </div >





        </>
    );
};

export default About;