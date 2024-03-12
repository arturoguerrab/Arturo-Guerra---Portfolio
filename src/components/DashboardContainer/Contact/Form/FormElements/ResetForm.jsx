import React from "react";
import { useTranslation } from "react-i18next";

const ResetForm = ({ handleState }) => {
  const { t } = useTranslation("global"); 
	return (
		<div className="flex flex-col justify-center items-center w-full gap-3 md:gap-5 animate-fade">
			<img
				src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/s61ctwz7eowbaqekgcbg"
				alt="action complete icon"
				loading="lazy"
				className="w-24 h-24 md:w-40 md:h-40"
			/>
			<p className="text-2xl font-bold">{t("contact.reset.title")}</p>
			<span className="text-sm">{t("contact.reset.sub")}</span>
			<button
				onClick={handleState}
				className="bg-pgreen rounded-full text-white font-bold w-20 h-7 text-sm md:h-9 md:w-28 md:rounded-2xl md:text-base"
			>
				{t("contact.reset.button")}
			</button>
		</div>
	);
};

export default ResetForm;
