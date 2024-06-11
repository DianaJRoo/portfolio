import React from "react";
import "../../styles/home.css";
import  Navbar  from "../component/navbar";
import  Certificado from "../component/certificado";
import  Proyectos from "../component/proyectos";

import  About  from "../component/About";
import Footer  from "../component/footer";




 const Home = () => {

	return (
		<>
			<Navbar />
			<About />
			<Certificado />
			<Proyectos />
			<Footer />
		</>
	);
};

export default Home;