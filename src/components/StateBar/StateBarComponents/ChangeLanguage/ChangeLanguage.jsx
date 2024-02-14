import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";

const ChangeLanguage = ({ props }) => {
	const style = {
		desing:
			"rounded-xl text-white bg-gray-800 flex justify-center items-center ",
		gridLG: " xl:col-span-1 ",
	};

	return (
		<button
			className={style.desing + style.gridLG + '  '}
			onClick={props.handleChange}
		>
			<TranslateIcon />{" "}
			<span className="hidden">{!props.language ? "en" : "es"}</span>
		</button>
	);
};

export default ChangeLanguage;
