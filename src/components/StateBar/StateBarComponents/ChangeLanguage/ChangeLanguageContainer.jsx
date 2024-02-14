import { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./ChangeLanguage";

const ChangeLanguageContainer = () => {
	const { language, setLanguage } = useContext(DataContext);
	const [t, i18n] = useTranslation("global");

	const handleChange = () => {
		setLanguage(!language);
		!language ? i18n.changeLanguage("es") : i18n.changeLanguage("en");
	};

	const props = { handleChange, language };

	return <ChangeLanguage props={props} />;
};

export default ChangeLanguageContainer;
