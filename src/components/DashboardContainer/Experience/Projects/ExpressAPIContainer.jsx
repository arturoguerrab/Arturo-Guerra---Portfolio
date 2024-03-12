import React from "react";
import { useTranslation } from "react-i18next";
import Project from "./Project";

const ExpressAPIContainer = () => {
	const { t } = useTranslation("global");
	const stack = [
		{
			name: "NodeJs",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/njgaop2nidyjenhdwhhy",
		},
		{
			name: "GIT",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/bpoxzcyhlmwr0ikgrpoz",
		},
		{
			name: "Tailwind",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/lysxqdv6dugrouvueblr",
		},
		{
			name: "Express",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/vaeseryk52tkkwooo7zu",
		},
		{
			name: "MongoDB",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/wru5cprubwizysjothm8",
		},
		{
			name: "NPM",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/qy00oxhjzvdwm5qn5cl0",
		},
	];

	const elements = {
		bg: "express",
		title: "Express API",
		subtitle: t("experience.projects.express.sub"),
		description: t("experience.projects.express.description"),
		button: t("experience.projects.button"),
		to: "https://whimsystore.netlify.app/",
		repository: "https://github.com/arturoguerrab/Desafios-Backend",
	};

	return <Project icons={stack} props={elements} />;
};

export default ExpressAPIContainer;
