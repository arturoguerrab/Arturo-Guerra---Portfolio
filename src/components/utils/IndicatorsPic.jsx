import React from "react";

const IndicatorsPic = ({ section }) => {
	let seleccion = (section) => {
		switch (section) {
			case "profile":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20seccion/jdtwpcqgmh2gaifsvvjg";
			case "experience":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20seccion/wof7k2aclaiq70kensz7";
			default:
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20seccion/etpfhwfve95c3qwdeuab";
		}
	};

	return (
		<img src={`${seleccion(section)}`} alt="Section icon" className="h-6 " />
	);
};

export default IndicatorsPic;
