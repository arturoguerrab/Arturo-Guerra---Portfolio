import { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import { useTranslation } from "react-i18next";

const ToggleLanguage = () => {
	const { toggleLanguage } = useContext(DataContext);
	const [t] = useTranslation("global");
	console.log("run btn");
	return (
		<div className=" flex justify-center items-center">
			<button
				className="bg-black opacity-70 h-10 flex items-center text-white"
				onClick={() => {
					toggleLanguage();
				}}
			>
				{t("header.toogleButton")}
			</button>
		</div>
	);
};

export default ToggleLanguage;
