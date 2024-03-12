import React from "react";
import Project from "./Project";
import { useTranslation } from "react-i18next";

const WhimsyContainer = () => {
	const { t } = useTranslation("global");
	const stack = [
		{
			name: "JavaScript",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/utm7ukexzfssbgjohchg",
		},

		{
			name: "CSS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/j9jmek0d25izwhxgy58o",
		},

		{
			name: "SASS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/awltdsz0wr5dts9l3llw",
		},

		{
			name: "Bootstrap",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/sp9ycbb47zytgqmpukfs",
		},

		{
			name: "HTML",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/fd2yg4oqdkwrmzkzyamb",
		},
	];

	const elements = {
		bg:"https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ularpmrcqbfk0zc9z17g",
		title:"Whimsy",
		subtitle:t("experience.projects.whimsy.sub"),
		description:t("experience.projects.whimsy.description"),
		button:t("experience.projects.button"),
		to:"https://whimsystore.netlify.app/",
		repository:"https://github.com/arturoguerrab/Whimsy-Store-JS",
	};

	return (
		<Project icons={stack} props={elements} />
	);
};

export default WhimsyContainer;
