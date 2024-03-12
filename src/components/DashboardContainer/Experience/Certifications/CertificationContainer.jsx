import React from "react";
import { useTranslation } from "react-i18next";
import Certification from "./Certification";

const CertificationContainer = () => {
	const { t } = useTranslation("global");
	const certification = [
        {
            title: t("experience.certification.full"),
            link: "https://www.coderhouse.com/ar/certificados/651328389bb1cf7008450918?lang=es",
        },
        {
            title: t("experience.certification.react"),
            link: "https://www.coderhouse.com/ar/certificados/6414b501faafb60002c1254a?lang=es",
        },
        {
            title: t("experience.certification.back"),
            link: "https://www.coderhouse.com/ar/certificados/651328389bb1cf8081450914?lang=es",
        },
		{
			title: t("experience.certification.web"),
			link: "https://www.coderhouse.com/ar/certificados/63719990a5c2a5000e843933?lang=es",
		},
		{
			title: t("experience.certification.js"),
			link: "https://www.coderhouse.com/ar/certificados/63cbe0ff3df2cc000eb657fe?lang=es",
		},
        {
			title: t("experience.certification.sql"),
			link: "https://www.coderhouse.com/ar/certificados/65a689a42662749474db9d05?lang=es",
		},
	];
	return <Certification elements={certification}/>;
};

export default CertificationContainer;
