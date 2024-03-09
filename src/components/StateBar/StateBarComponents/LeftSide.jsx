import React from "react";
import ChangeLanguageContainer from "./ChangeLanguage/ChangeLanguageContainer";
import DownloadResumeContainer from "./DownloadResume/DownloadResumeContainer";
import ChangeBgContainer from "./ChangeBg/ChangeBgContainer";

const LeftSide = () => {
	return (
		<div className="h-9 gap-1.5 flex">
			<ChangeLanguageContainer />
			<DownloadResumeContainer />
			<ChangeBgContainer />
		</div>
	);
};

export default LeftSide;
