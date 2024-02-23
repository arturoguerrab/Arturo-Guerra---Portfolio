import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";

const ChangeLanguage = ({ props }) => {
	const style = {
		desing:
			"rounded-xl text-white bg-gray-800 flex justify-center items-center gap-1.5 ",
		gridLG: "lg:col-span-2 ",
		span: "hidden md:inline text-xs font-semibold w-1/4 ",
	};

	return (
		<button
			className={style.desing + style.gridLG}
			onClick={props.handleChange}
		>
			<TranslateIcon />{" "}
			<span className={style.span}>{!props.language ? "EN" : "ES"}</span>
		</button>
	);
};

export default ChangeLanguage;
