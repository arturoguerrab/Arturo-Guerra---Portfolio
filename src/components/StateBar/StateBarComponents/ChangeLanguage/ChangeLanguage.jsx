import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = ({ props }) => {
	const { t } = useTranslation("global");
	return (
		<button
			className="w-12 h-9 flex justify-center items-center bg-pblack rounded-xl || md:w-20 md:gap-1.5 "
			onClick={props.handleChange}
		>
			<img
				src={
					!props.language
						? "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/yhbosuysilp53l7cuwv1"
						: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/z58fvfwyndviarmdlvih"
				}
				alt="translate icon"
				loading="lazy"
				className="h-6 || md:hidden "
			/>
			<img
				src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/j35upuybxsqyvblmynil"
				alt="translate icon"
				loading="lazy"
				className="h-6 w-6 hidden || md:inline"
			/>
			<span className="text-pwhite font-bold text-xs hidden || md:inline || lg:text-sm  ">
				{t("stateBar.translate")}
			</span>
		</button>
	);
};

export default ChangeLanguage;
