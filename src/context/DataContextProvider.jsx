import { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [language, setLanguage] = useState(false);
	const [t, i18n] = useTranslation("global");

	const toggleLanguage = () => {
		setLanguage(!language);
		!language ? i18n.changeLanguage("es") : i18n.changeLanguage("en");
	};

	let data = { language, setLanguage, toggleLanguage };

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
