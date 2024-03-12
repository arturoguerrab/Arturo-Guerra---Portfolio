import Divider from "@mui/material/Divider";
import React from "react";
import ButtonLink from "../../../utils/ButtonLink";
import { GitHub } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Project from "./Project";

const Portfolio = () => {
	const { t } = useTranslation("global");
	const stack = [
		{
			name: "JavaScript",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/utm7ukexzfssbgjohchg",
		},
		{
			name: "ReactJS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/tfvxrtgdropsm1nyuptl",
		},
		{
			name: "Tailwind",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/lysxqdv6dugrouvueblr",
		},
		{
			name: "GIT",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/bpoxzcyhlmwr0ikgrpoz",
		},
		{
			name: "NPM",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/qy00oxhjzvdwm5qn5cl0",
		},
	];
	const elements = {
		bg: "portfolio",
		title: "Porfolio",
		subtitle: t("experience.projects.portfolio.sub"),
		description: t("experience.projects.portfolio.description"),
		button: t("experience.projects.button"),
		to: "https://arturoguerra.vercel.app/",
		repository: "https://github.com/arturoguerrab/Arturo-Guerra---Portfolio",
	};

	return <Project icons={stack} props={elements} big={true} />;
};

export default Portfolio;
