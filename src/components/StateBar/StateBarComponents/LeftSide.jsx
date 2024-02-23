import React from "react";
import ChangeLanguageContainer from "./ChangeLanguage/ChangeLanguageContainer";
import DownloadResumeContainer from "./DownloadResume/DownloadResumeContainer";
import ChangeBgContainer from "./ChangeBg/ChangeBgContainer";

const LeftSide = () => {
	const style = {
		grid: "col-span-3 grid grid-cols-3 gap-1.5 ",
		gridSM: "sm:col-span-4 sm:grid-cols-4 ",
		gridLG: "lg:col-span-3 lg:grid-cols-8 ",
		grid2XL: "2xl:col-span-2 ",
	};
	return (
		<div className={style.grid + style.gridSM + style.gridLG + style.grid2XL}>
			<ChangeLanguageContainer />
			<DownloadResumeContainer />
			<ChangeBgContainer />
		</div>
	);
};

export default LeftSide;
