import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { useTranslation } from "react-i18next";

const ToggleLanguage = () => {
	const { toggleLanguage } = useContext(DataContext);
	const [t] = useTranslation("global");
	console.log("run btn");
	return (
		<>
			<h1>{t("header.hello")}</h1>
			<h2>{import.meta.env.VITE_HELLO}</h2>
			<button
				onClick={() => {
					toggleLanguage();
				}}
			>
				Change
			</button>
		</>
	);
};

export default ToggleLanguage;
