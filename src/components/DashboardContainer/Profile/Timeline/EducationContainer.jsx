import React from 'react'
import { useTranslation } from "react-i18next";
import Timeline from "./Timeline";

const EducationContainer = () => {
	const { t } = useTranslation("global");
	const education = [
		{
			year: 2023,
			position: t("profile.timeline.education.coder"),
			site: "Coderhouse",
		},
		{
			year: 2020,
			position: t("profile.timeline.education.fcc"),
			site: "freeCodeCamp",
		},
		{
			year: 2016,
			position: t("profile.timeline.education.usm"),
			site: "Universidad Santa María",
		},
	];
	return <Timeline elements={education} size={true} title={t("profile.timeline.education.name")} />;
}

export default EducationContainer