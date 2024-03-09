import React from "react";
import IndicatorsPic from "./IndicatorsPic";

const SectionDivider = ({ section, title }) => {
	return (
		<div className="glassmorphism h-10 mb-8 rounded-2xl flex justify-between items-center px-5">
			<IndicatorsPic section={section}/>
			<span className="font-bold text-white " >{title}</span>
		</div>
	);
};

export default SectionDivider;
