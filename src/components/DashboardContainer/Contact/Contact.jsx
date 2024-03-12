import React from "react";
import SectionDivider from "../../utils/SectionDivider";
import FormContainer from "./Form/FormContainer";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation("global");
	return (
		<div id="contact" className="flex flex-col">
			<SectionDivider section={"contact"} title={t("divider.contact")} />
			<div className=" self-center w-full grid grid-cols-1 md:grid-cols-2 md:w-[672px] grid-rows-a2 md:grid-rows-a3 gap-8 pb-8">
				<div className="col-span-1 row-span-2 md:col-span-2 md:row-span-3 rounded-3xl ">
					<FormContainer />
				</div>
			</div>
			<div className="bg-pblack h-16 mb-8 rounded-2xl flex flex-col items-center justify-center text-pwhite">
				<p>{t("contact.divider.title")}<a href="https://www.linkedin.com/in/arturoguerrab/" className="font-bold" target="_blank">Arturo Guerra </a></p>
				<span className=" ">{t("contact.divider.sub")}</span>
			</div>
		</div>
	);
};

export default Contact;
