import React from "react";
import IndicatorsPic from "./IndicatorsPic";

const SectionDivider = ({ section, title }) => {
	return (
		<div className="glassDark h-10 mb-8 rounded-2xl flex justify-between items-center px-5">
			<IndicatorsPic section={section} />
			<span className="font-bold lg:text-xl text-pwhite ">{title}</span>
		</div>
	);
};

export default SectionDivider;
