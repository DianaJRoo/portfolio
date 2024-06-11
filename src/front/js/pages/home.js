import React from "react";
import "../../styles/home.css";
import  Navbar  from "../component/navbar";
import  Certificado from "../component/certificado";
import  About  from "../component/About";
import Footer  from "../component/footer";




 const Home = () => {

	return (
		<>
			
			<About />
			<Certificado />
			
		</>
	);
};

export default Home;