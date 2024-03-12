import React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "./Timeline";

const JobsContainer = () => {
	const { t } = useTranslation("global");
	const jobs = [
		{
			year: 2023,
			position: t("profile.timeline.jobs.expert"),
			site: "iPoint, Apple APR",
		},
		{
			year: 2022,
			position: t("profile.timeline.jobs.sales"),
			site: "iPoint, Apple APR",
		},
		{
			year: 2019,
			position: t("profile.timeline.jobs.tech"),
			site: "Fix Station",
		},
	];
	return <Timeline elements={jobs} size={'xl:'} title={t("profile.timeline.jobs.name")} />;
};

export default JobsContainer;
