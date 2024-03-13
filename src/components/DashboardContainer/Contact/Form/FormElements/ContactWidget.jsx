import React from "react";
import { useTranslation } from "react-i18next";

const ContactWidget = ({ children }) => {
	const { t } = useTranslation("global");
	return (
		<div className="h-full">
			<div className="bg-pwhite h-32 md:h-72 rounded-t-3xl p-5 md:p-8 flex flex-col justify-between">
				<div className="flex justify-end">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/snpfqbebnuqghlbvf2zi"
						alt="contact icon"
						loading="lazy"
						className="h-5 w-6"
					/>
				</div>
				<div className="md:flex justify-between items-end">
					<div>
						<h3 className="text-xs md:text-base text-pgreen font-semibold">
							{t("contact.name")}
						</h3>
						<h2 className="text-2xl md:text-3xl font-bold">
							{t("contact.title")}
						</h2>
						<span className="text-xs md:text-base text-pgray">
						{t("contact.sub")}
						</span>
					</div>
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ky1tn5e7y76gubgcxume"
						alt="image of arturo guerra"
						loading="lazy"
						className="hidden md:inline h-36 pe-8"
					/>
				</div>
			</div>
			<div className="glassWhite h-80 md:h-[400px] p-5 md:p-8 flex items-center rounded-b-3xl">
				{children}
			</div>
		</div>
	);
};

export default ContactWidget;
