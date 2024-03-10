import React from "react";
import { Link } from "react-scroll";

const DownBarButtons = ({ to }) => {
	let seleccion = (section) => {
		switch (section) {
			case "profile":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Dock/wpmixnpj27p8kiduvba3";
			case "experience":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Dock/qdci3uit3i8echzi6ove";
			case "contact":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Dock/qmw9scnremc7iswkl3wd";
		}
	};
	const prueba = () => {
		console.log("active");
	};
	const inactive = () => {
		console.log("inactive");
	};
	return (
		<Link
			className={"rounded-xl text-white flex flex-col gap-1 items-center "}
			to={`${to}`}
			spy={true}
			smooth={true}
			offset={to == "profile" ? -100 : -80}
			duration={500}
			activeClass="indicator"
		>
			<button className=" flex justify-center items-center rounded-xl h-full w-full bg-transparent ">
				<img
					src={`${seleccion(to)}`}
					alt={`${to} icon`}
					className="h-10 w-10"
				/>
			</button>
			<div className="bg-pgreen h-2 w-4 rounded-xl hidden "></div>
		</Link>
	);
};

export default DownBarButtons;
