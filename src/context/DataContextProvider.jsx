import { useEffect } from "react";
import { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [language, setLanguage] = useState(false);
	const [location, setLocation] = useState(null);
	
	// Funcionalidad para el manejo de la ubicacion
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				setLocation({ lat: coords.latitude, lng: coords.longitude });
			},
			(err) => {
				setLocation(null);
			}
		);

	},[])

	// Devolucion de datos para el contexto
	let data = { language, setLanguage, location };

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
